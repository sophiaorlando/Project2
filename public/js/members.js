$(document).ready(() => {
	// This file just does a GET request to figure out which user is logged in
	// and updates the HTML on the page
	$.get('/api/user_data').then((data) => {
		$('.member-name').text(data.username)
		$('.member-email').text(data.email)
		const userId = data.id
		$('#userEvents').text(userId)

		clickBtn(userId)
	})

	function clickBtn(data) {
		$('#myEvents').on('click', function(event) {
			event.preventDefault()
			window.location.href = `/userevent/${data}`
		})
	}
})
