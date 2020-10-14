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
			// console.log(dataParsed);
			res.render('homepage', {
				main: 'main.css',
				style: 'style.css',
				script: 'homepage.js',
				countyNames: dataParsed,
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
		res.render('members', {
			main: 'main.css',
			style: 'members.css',
			script: 'members.js',
		})
	})

	// CREATE EVENT
	app.get('/createevent/:id', (req, res) => {
		db.beachInfo
			.findAll({
				where: {
					id: req.params.id,
				},
			})
			.then((data) => {
				console.log(data)
				const dataString = JSON.stringify(data)
				// console.log(dataString)
				const dataParsed = JSON.parse(dataString)
				console.log(dataParsed)

				res.render('createevent', {
					main: 'main.css',
					style: 'createevent.css',
					script: 'createevent.js',
					beach: dataParsed,
				})
			})
	})

	// COUNTY
	app.get('/:county', (req, res) => {
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

	app.get('/beach/:id/')

	// Here we've add our isAuthenticated middleware to this route.
	// If a user who is not logged in tries to access this route they will be redirected to the signup page
}
