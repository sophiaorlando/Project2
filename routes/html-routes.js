// Requiring path to so we can use relative routes to our HTML files
const path = require('path')
const db = require('../models')

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require('../config/middleware/isAuthenticated')

module.exports = function(app) {
	app.get('/beach/:id', (req, res) => {
		const beachId = req.params.id

		db.beachInfo
			.findAll({
				where: {
					id: beachId,
				},
			})
			.then((data) => {
				const dataString = JSON.stringify(data)
				const dataParsed = JSON.parse(dataString)
				console.log(dataParsed)

				res.render('beach', {
					main: 'main.css',
					style: 'beach.css',
					script: 'beach.js',
					siteName: dataParsed[0].siteName,
					address: dataParsed[0].address,
					website: dataParsed[0].website,
					organization: dataParsed[0].organization,
					phone: dataParsed[0].phone,
					email: dataParsed[0].email,
				})
			})
	})

	app.get('/', (req, res) => {
		// If the user already has an account send them to the members page
		// if (req.user) {
		//   res.redirect("/members");
		// }
		// res.sendFile(path.join(__dirname, "../public/signup.html"));
		res.render('homepage', {
			main: 'main.css',
			style: 'style.css',
			script: 'homepage.js',
		})
	})

	app.get('/team', (req, res) => {
		res.render('team', {
			style: 'style.css',
		})
	})

	app.get('/about', (req, res) => {
		res.render('about', {
			main: 'main.css',
			style: 'about.css',
		})
	})

	app.get('/signup', (req, res) => {
		res.render('signup')
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
					countyName: dataParsed[0].county,
				})
			})
	})

	// Here we've add our isAuthenticated middleware to this route.
	// If a user who is not logged in tries to access this route they will be redirected to the signup page
	app.get('/members', isAuthenticated, (req, res) => {
		res.render('members', {
			main: 'main.css',
			style: 'members.css',
			script: 'members.js',
		})
	})
}
