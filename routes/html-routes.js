// Requiring path to so we can use relative routes to our HTML files
const path = require('path')
const db = require('../models')

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require('../config/middleware/isAuthenticated')

module.exports = function(app) {
	// HOMEPAGE
	app.get('/', (req, res) => {
		// If the user already has an account send them to the members page
		// if (req.user) {
		//   res.redirect("/members");
		// }
		// res.sendFile(path.join(__dirname, "../public/signup.html"));
		db.beachInfo.findAll({}).then((results) => {
			const dataString = JSON.stringify(results)
			// console.log(dataString)
			const dataParsed = JSON.parse(dataString)
			const nameArr = []
			// console.log(dataParsed);
			for (let index = 0; index < dataParsed.length; index++) {
				const element = dataParsed[index]
				let name = element.county
				if (name) {
					name = name.trim()
					nameArr.push(name)
				}
			}
			// console.log(nameArr);
			const countyArr = []
			const newNameArr = nameArr.filter((a, b) => nameArr.indexOf(a) === b).sort()
			for (let index = 0; index < newNameArr.length; index++) {
				const county = newNameArr[index]
				countyArr.push({ county: county })
			}
			// console.log(newNameArr);
			res.render('homepage', {
				main: 'main.css',
				style: 'style.css',
				script: 'homepage.js',
				countyNames: countyArr,
			})
		})
	})

	// TEAM
	app.get('/team', (req, res) => {
		res.render('team', {
			style: 'style.css',
		})
	})

	// ABOUT
	app.get('/about', (req, res) => {
		res.render('about', {
			main: 'main.css',
			style: 'about.css',
		})
	})

	// SIGNUP
	app.get('/signup', (req, res) => {
		res.render('signup', {
			main: 'main.css',
			style: 'signup.css',
			script: 'signup.js',
		})
	})

	app.get('/login', (req, res) => {
		// If the user already has an account send them to the members page
		if (req.user) {
			res.redirect('/members')
		}

		res.render('login', {
			main: 'main.css',
			style: 'login.css',
			script: 'login.js',
		})
	})

	// MEMBERS
	app.get('/members', isAuthenticated, (req, res) => {
		// console.log(req)
		res.render('members', {
			main: 'main.css',
			style: 'members.css',
			script: 'members.js',
		})
	})

	// CREATE EVENT PAGE
	app.get('/createevent/:id', isAuthenticated, (req, res) => {
		db.beachInfo
			.findAll({
				where: {
					id: req.params.id,
				},
			})
			.then((data) => {
				// console.log(data)
				const dataString = JSON.stringify(data)
				// console.log(dataString)
				const dataParsed = JSON.parse(dataString)
				// console.log(dataParsed)

				const username = req.user.username
				const userId = req.user.id

				// console.log(username)

				res.render('createevent', {
					main: 'main.css',
					style: 'createevent.css',
					script: 'createevent.js',
					beach: dataParsed,
					username: { name: username },
					userId: { id: userId },
				})
			})
	})

	// EVENT PAGE
	app.get('/event/:id', isAuthenticated, (req, res) => {
		db.Events.findAll({
			where: {
				id: req.params.id,
			},
			include: [db.beachInfo, db.Register],
		}).then((data) => {
			// console.log(data)
			const dataString = JSON.stringify(data)
			// console.log(dataString)
			const dataParsed = JSON.parse(dataString)
			// console.log(dataParsed)
			// console.log(dataParsed[0].beachInfo)

			const eventId = parseInt(req.params.id)

			const userId = req.user.id
			console.log('===================')
			console.log(userId)
			console.log(typeof eventId)

			res.render('event', {
				main: 'main.css',
				style: 'event.css',
				script: 'event.js',
				eventInfo: dataParsed[0],
				beachInfo: dataParsed[0].beachInfo,
				userId: { id: userId },
				eventId: { id: eventId },
			})
		})
	})

	//USER EVENT
	app.get('/userevent/:id', (req, res) => {
		db.Register.findAll({
			where: {
				UserId: req.params.id,
			},
		}).then((data) => {
			// console.log(data)
			const dataString = JSON.stringify(data)
			// console.log(dataString)
			const dataParsed = JSON.parse(dataString)
			console.log(dataParsed)
			// console.log(dataParsed[0].Register)

			res.render('userevent', {
				main: 'main.css',
				style: 'userevent.css',
				script: 'userevent.js',
				// eventInfo: dataParsed[0],
				// beachInfo: dataParsed[0].Register,
			})
		})
	})
	// COUNTY
	app.get('/counties/:county', (req, res) => {
		// console.log('----------------')

		db.beachInfo
			.findAll({
				where: {
					county: req.params.county,
				},
			})
			.then((data) => {
				const dataString = JSON.stringify(data)
				// console.log(dataString)
				const dataParsed = JSON.parse(dataString)
				// console.log(dataParsed)

				res.render('county', {
					main: 'main.css',
					style: 'county.css',
					script: 'county.js',
					counties: dataParsed,
				})
			})
	})

	// BEACH
	app.get('/beach/:id', (req, res) => {
		// // If the user already has an account send them to the members page

		// res.sendFile(path.join(__dirname, '../public/signup.html'))
		const beachId = req.params.id

		db.beachInfo
			.findAll({
				where: {
					id: beachId,
				},
				include: [db.Events],
			})
			.then((data) => {
				// console.log(data)
				const dataString = JSON.stringify(data)
				const dataParsed = JSON.parse(dataString)
				// console.log(dataParsed[0].Events);

				// if (Users) {
				//   res.render("beach");
				//   console.log('redirection');
				// } else {
				//   res.redirect("/signup");
				// }

				res.render('beach', {
					main: 'main.css',
					style: 'beach.css',
					script: 'beach.js',
					beach: dataParsed[0],
					event: dataParsed[0].Events,
				})
			})
	})

	// Here we've add our isAuthenticated middleware to this route.
	// If a user who is not logged in tries to access this route they will be redirected to the signup page
}
