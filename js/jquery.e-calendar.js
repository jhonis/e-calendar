(function( $ ) {

    var eCalendar = function(options, object) {
        // Initializing options
        var weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
        var months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        var textArrows = {previous: '<', next: '>'};
        var eventTitle = 'Eventos';
        var events = [{title: 'Brasil x Croácia', description: 'Abertura da copa do mundo 2014', datetime: new Date(2014, 6, 12, 17)},
            {title: 'Brasil x México', description: 'Segundo jogo da seleção brasileira', datetime: new Date(2014, 6, 17, 16)},
            {title: 'Brasil x Camarões', description: 'Terceiro jogo da seleção brasileira', datetime: new Date(2014, 6, 23, 16)}];

        // Initializing global variables
        var adDay = new Date().getDate();
        var adMonth = new Date().getMonth();
        var adYear = new Date().getFullYear();
        var dDay = adDay;
        var dMonth = adMonth;
        var dYear = adYear;
        var instance = object;

        function init(oInit) {
            if (typeof oInit != 'undefined') {
                if (typeof oInit.weekDays != 'undefined') {
                    weekDays = oInit.weekDays;
                }
                if (typeof oInit.months != 'undefined') {
                    months = oInit.months;
                }
                if (typeof oInit.textArrows != 'undefined') {
                    textArrows = oInit.textArrows;
                }
                if (typeof oInit.events != 'undefined') {
                    events = oInit.events;
                }
                if (typeof oInit.eventTitle != 'undefined') {
                    eventTitle = oInit.eventTitle;
                }
            }
            print();
        }

        function lpad(value, length, pad) {
            if (typeof pad == 'undefined') {
                pad = '0';
            }
            var p;
            for (var i = 0; i < length; i++) {
                p += pad;
            }
            return (p + value).slice(-length);
        }

        var mouseOver = function() { $(this).addClass('c-nav-btn-over'); };
        var mouseLeave = function() { $(this).removeClass('c-nav-btn-over'); };
        var mouseOverEvent = function() {
            $(this).addClass('c-event-over');
            var d = $(this).attr('data-event-day');
            $('div.c-event-item[data-event-day="' + d + '"]').addClass('c-event-over');
        };
        var mouseLeaveEvent = function() {
            $(this).removeClass('c-event-over')
            var d = $(this).attr('data-event-day');
            $('div.c-event-item[data-event-day="' + d + '"]').removeClass('c-event-over');
        };
        var mouseOverItem = function() {
            $(this).addClass('c-event-over');
            var d = $(this).attr('data-event-day');
            $('div.c-event[data-event-day="' + d + '"]').addClass('c-event-over');
        };
        var mouseLeaveItem = function() {
            $(this).removeClass('c-event-over')
            var d = $(this).attr('data-event-day');
            $('div.c-event[data-event-day="' + d + '"]').removeClass('c-event-over');
        };
        var nextMonth = function() {
            if (dMonth < 11) {
                dMonth++;
            } else {
                dMonth = 0;
                dYear++;
            }
            print();
        };
        var previousMonth = function() {
            if (dMonth > 0) {
                dMonth--;
            } else {
                dMonth = 11;
                dYear--;
            }
            print();
        };

        function print() {
            var dWeekDayOfMonthStart = new Date(dYear, dMonth, 1).getDay();
            var dLastDayOfMonth = new Date(dYear, dMonth + 1, 0).getDate();
            var dLastDayOfPreviousMonth = new Date(dYear, dMonth + 1, 0).getDate() - dWeekDayOfMonthStart + 1;

            var cBody = $('<div class="c-grid"></div>');
            var cEvents = $('<div class="c-event-grid"></div>');
            var cEventsBody = $('<div class="c-event-body"></div>');
            cEvents.append($('<div class="c-event-title c-pad-top"></div>').html(eventTitle));
            cEvents.append(cEventsBody);
            var cNext = $('<div class="c-next c-grid-title c-pad-top"></div>');
            var cMonth = $('<div class="c-month c-grid-title c-pad-top"></div>');
            var cPrevious = $('<div class="c-previous c-grid-title c-pad-top"></div>');
            cPrevious.html(textArrows.previous);
            cMonth.html(months[dMonth] +' '+ dYear);
            cNext.html(textArrows.next);

            cPrevious.on('mouseover', mouseOver).on('mouseleave', mouseLeave).on('click', previousMonth);
            cNext.on('mouseover', mouseOver).on('mouseleave', mouseLeave).on('click', nextMonth);

            cBody.append(cPrevious);
            cBody.append(cMonth);
            cBody.append(cNext);
            for (var i = 0; i < weekDays.length; i++) {
                var cWeekDay = $('<div class="c-week-day c-pad-top"></div>');
                cWeekDay.html(weekDays[i]);
                cBody.append(cWeekDay);
            }
            var day = 1;
            var dayOfNextMonth = 1;
            for (var i = 0; i < 42; i++) {
                var cDay = $('<div></div>');
                if (i < dWeekDayOfMonthStart) {
                    cDay.addClass('c-day-previous-month c-pad-top');
                    cDay.html(dLastDayOfPreviousMonth++);
                } else if (day <= dLastDayOfMonth) {
                    cDay.addClass('c-day c-pad-top');
                    if (day == dDay && adMonth == dMonth && adYear == dYear) {
                        cDay.addClass('c-today');
                    }
                    for (var j = 0; j < events.length; j++) {
                        var d = events[j].datetime;
                        if (d.getDate() == day && (d.getMonth() - 1) == dMonth && d.getFullYear() == dYear) {
                            cDay.addClass('c-event').attr('data-event-day', d.getDate());
                            cDay.on('mouseover', mouseOverEvent).on('mouseleave', mouseLeaveEvent);
                        }
                    }
                    cDay.html(day++);
                } else {
                    cDay.addClass('c-day-next-month c-pad-top');
                    cDay.html(dayOfNextMonth++);
                }
                cBody.append(cDay);
            }
            var eventList = $('<div class="c-event-list"></div>');
            for (var i = 0; i < events.length; i++) {
                var d = events[i].datetime;
                if ((d.getMonth() - 1) == dMonth && d.getFullYear() == dYear) {
                    var date = lpad(d.getDate(), 2) +'/'+ lpad(d.getMonth(), 2) +' '+ lpad(d.getHours(), 2) +':'+ lpad(d.getMinutes(), 2);
                    var item = $('<div class="c-event-item"></div>');
                    var title = $('<div class="title"></div>').html(date +'  '+ events[i].title +'<br/>');
                    var description = $('<div class="description"></div>').html(events[i].description +'<br/>');
                    item.attr('data-event-day', d.getDate());
                    item.on('mouseover', mouseOverItem).on('mouseleave', mouseLeaveItem);
                    item.append(title).append(description);
                    eventList.append(item);
                }
            }
            $(instance).addClass('calendar');
            cEventsBody.append(eventList);
            $(instance).html(cBody).append(cEvents);
        }
        init(options);
    }

    $.fn.eCalendar = function(options) {
        return this.each(function() {
            return eCalendar(options, $(this));
        });
    };

}( jQuery ));