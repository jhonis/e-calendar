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
    {title: 'Event Title 1', description: 'Description 1', datetime: new Date(2016, 0, 12, 17)},
    {title: 'Event Title 2', description: 'Description 2', datetime: new Date(2016, 0, 23, 16)}
],
firstDayOfWeek: 0
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
	    {title: 'Event Title 1', description: 'Description 1', datetime: new Date(2016, 0, 12, 17)},
	    {title: 'Event Title 2', description: 'Description 2', datetime: new Date(2016, 0, 23, 16)}
	]
});

$('#calendar').eCalendar({url: 'loadCalendar',
                          weekDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                          firstDayOfWeek: 1}); // calendar starting on monday | (0 - 6: week days format)

//With links on the description
$('#calendar').eCalendar({
    events: [
        {
          title: 'Event Title 1', 
          description: 'Description 1. Without link', 
          datetime: new Date(2016, 9, 20, 17) 
        },
        {
          title: 'Event Title 2', 
          description: 'Description 2. Only with link opening in the same tab', 
          datetime: new Date(2016, 9, 23, 16), 
          url: "https://www.google.com"
        },
        {
          title: 'Event Title 2', 
          description: 'Description 3. With link opening on new tab', 
          datetime: new Date(2016, 9, 23, 16), 
          url: "https://www.google.com", 
          url_blank: true
        },
        {
          title: 'Event Title 2', 
          description: 'Description 4. Only with link opening in the same tab', 
          datetime: new Date(2016, 9, 23, 16), 
          url: "https://www.google.com", 
          url_blank: false
        }
    ]
});
```

PS: remember that in date object instantiation, like the code below, the month starts from 0 to 11 and generate a date: 31/01/2016
```JavaScript
new Date(2016, 0, 31)
```