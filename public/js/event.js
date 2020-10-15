$(function() {
	$('.back_arrow').on('click', function(event) {
		event.preventDefault()

		const btnId = $(this).data('id')

		console.log(btnId)

		window.location.href = `/beach/${btnId}`

		// alert(rowId)
	})
})
