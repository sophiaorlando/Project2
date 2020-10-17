$(function() {
	$('.back_arrow').on('click', function(event) {
		event.preventDefault()

		const btnId = $(this).data('id')

		console.log(btnId)

		window.location.href = `/beach/${btnId}`
		// alert(rowId)
	})

	$('.register-btn').on('click', function(event) {
		event.preventDefault()

		// const userId = $(this).data('id')

		// console.log($('#event-type').text())

		// const registerObj = {
		// 	eventType: $('#event-type').text(),
		// 	EventId: $('#eventId').data('id'),
		// 	UserId: $('#UserId').data('id'),
		// }

		// console.log(registerObj)
		alert('feature in development!')

		// register(userId)
	})

	// function register(data) {
	// 	$.ajax({
	// 		type: 'POST',
	// 		url: '/api/register',
	// 		data: eventObj,
	// 		success: function() {
	// 			console.log('Added a new event')
	// 			// Reload the page to get the udpated list
	// 			const beachId = $('.title').data('id')
	// 			window.location.href = `/beach/${beachId}`
	// 		},
	// 	})
	// }
})
