// Requiring path to so we can use relative routes to our HTML files
const path = require('path')
const db = require('../models')

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require('../config/middleware/isAuthenticated')

module.exports = function(app) {
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

		res.render('homepage')
	})

	app.get('/api/counties', (req, res) => {
		db.beachInfo.findAll({}).then((dbBeach) => {
			res.json(dbBeach)
		})
	})

	app.get('/team', (req, res) => {
		res.render('team', {
			style: 'style.css',
		})
	})

	app.get('/about', (req, res) => {
		res.render('about')
	})

	app.get('/signup', (req, res) => {
		res.render('signup')
	})

	app.get('/login', (req, res) => {
		// If the user already has an account send them to the members page
		if (req.user) {
			res.redirect('/members')
		}
		res.render('login')
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

	app.get('/:county', (req, res) => {
		const county = req.params.county
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
				console.log(dataParsed)

				res.render('county', {
					main: 'main.css',
					style: 'county.css',
					script: 'county.js',
					counties: dataParsed,
					countyName: dataParsed[0].county,
				})
			})
	})
}
