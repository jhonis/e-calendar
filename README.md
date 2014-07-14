e-calendar
==========

Options (default)
        weekDays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
        months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        textArrows: {previous: '<', next: '>'},
        eventTitle: 'Eventos',
        url: '',
        events: [
            {title: 'Event Title 1', description: 'Event Description 1', datetime: new Date(2014, 7, 12, 17)},
				    {title: 'Event Title 2', description: 'Event Description 2', datetime: new Date(2014, 7, 17, 16)}
        ]

Event Object Properties
	title: Event title, displayed in bold
	description: Event description
	datetime: Date and time of event

Examples of use

$('#calendar').eCalendar({url: 'loadCalendar'});

$('#calendar').eCalendar({
	events: [
				{title: 'Event Title 1', description: 'Event Description 1', datetime: new Date(2014, 7, 12, 17)},
				{title: 'Event Title 2', description: 'Event Description 2', datetime: new Date(2014, 7, 17, 16)}
			]
});

$('#calendar').eCalendar({url: 'loadCalendar',
                          weekDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']});
