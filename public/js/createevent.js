$(document).ready(function() {
	// Date picker
	$('#datetimepicker1').datetimepicker({
		format: 'L',
	})
	// Time picker menu
	$('#datetimepicker2').datetimepicker({
		format: 'LT',
	})

	// Dropdown menu
	$('#dropdown_btn').change(function() {
		$(this)
			.find('option:selected')
			.text()
	})

	// Submit button
	$('#submitBtn').on('click', function(event) {
		event.preventDefault()

		const eventType = $('.dropdown_btn option:selected').text()
		// alert(eventType)
		const selectDate = $('.select-date')
			.val()
			.trim()
		// alert('text is' + dateSelect)
		const selectTime = $('.select-time')
			.val()
			.trim()
		// alert('text is' + selectTime)
		const eventTitle = $('#eventTitle')
			.val()
			.trim()
		// alert('text is ' + eventTitle)
		const eventDescription = $('#eventDescription')
			.val()
			.trim()
		// alert('text is ' + eventDescription)

		if (
			!eventType ||
			!selectDate ||
			!selectTime ||
			!eventTitle ||
			!eventDescription
		) {
			alert('Please fill all the information')
		}

		// alert('Thanks for the submission')

		const eventObj = {
			event_type: eventType,
			date: selectDate,
			time: selectTime,
			event_title: eventTitle,
			event_description: eventDescription,
		}

		insertEvent(eventObj)
	})

	// A function for creating an author. Calls getAuthors upon completion
	function insertEvent(eventObj) {
		// Send the POST request
		$.post('/api/events', eventObj, function() {
			console.log('Added a new event')
			// Reload the page to get the udpated list
			const beachId = $('.title').data('id')
			window.location.href = `/beach/${beachId}`
		})
	}
})
