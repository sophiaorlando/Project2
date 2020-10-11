$(function() {
	$('.beach').on('click', function(event) {
		event.preventDefault()

		let rowId = $(this).data('id')

		window.location.href = `/beach/${rowId}`

		// alert(rowId)
	})
})
