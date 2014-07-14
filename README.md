e-calendar
==========

<img src="https://raw.githubusercontent.com/jhonis/e-calendar/master/example/example.png" alt="example_image"/>

####How to use
  One of the simplest ways to generate a calendar is to create a div that has an element that can be chosen with jQuery. Ex: ```<div id="calendar"></div>```

####Options (default)
```JavaScript
weekDays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
         'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
textArrows: {previous: '<', next: '>'},
eventTitle: 'Eventos',
url: '',
events: [
    {title: 'Event Title 1', description: 'Description 1', datetime: new Date(2014, 7, 12, 17)},
    {title: 'Event Title 2', description: 'Description 2', datetime: new Date(2014, 7, 17, 16)}
]
```
####Event Object Properties
```JavaScript
title: Event title, displayed in bold
description: Event description
datetime: Date and time of event
```

####Examples of use
```JavaScript
$('#calendar').eCalendar({url: 'loadCalendar'});

$('#calendar').eCalendar({
	events: [
	    {title: 'Event Title 1', description: 'Description 1', datetime: new Date(2014, 7, 12, 17)},
	    {title: 'Event Title 2', description: 'Description 2', datetime: new Date(2014, 7, 17, 16)}
	]
});

$('#calendar').eCalendar({url: 'loadCalendar',
                          weekDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']});
```
