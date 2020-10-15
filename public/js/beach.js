$(function() {
	$('.create_btn').on('click', function(event) {
		event.preventDefault()

		const btnId = $(this).data('id')

		console.log(btnId)

		window.location.href = `/createevent/${btnId}`

		// alert(rowId)
	})

	$('.event_item').on('click', function(event) {
		event.preventDefault()

		const eventId = $(this).data('id')

		window.location.href = `/event/${eventId}`
	})
})
