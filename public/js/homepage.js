// const { response } = require("express");

$(document).ready(() => {
	// $(".dropdown-toggle").dropdown();

	$('.dropdown-item').on('click', () => {
		console.log('hello, welcome to the console!')
		const selectedCounty = $(this).data('county')
		const urlCounty = selectedCounty.replace(/\s/g, '%20')

		console.log(urlCounty)
		const url = '/:' + urlCounty

		// ajax call to retrieve data and populate the page with information about selected state

		$.ajax({
			url: url,
			success: function(result) {
				document.write(result)
			},
		})
	})
})
