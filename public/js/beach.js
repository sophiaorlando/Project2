$(function() {
	$('.create_btn').on('click', function(event) {
		event.preventDefault()

		const btnId = $('.create_btn').data('id')

		console.log(btnId)

		window.location.href = `/createevent/${btnId}`

		// alert(rowId)
	})
})
