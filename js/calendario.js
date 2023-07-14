document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid'],
      locale: 'es',
      events: [
            {
                title: 'PARTIDAZO!!',
                start: '2023-06-07',
                end:'2023-06-10'
            },
            {
                title: 'Curso  Peluqueria Canina nivel 1',
                start: '2023-07-03',
                end:'2023-07-13'
            },
            {
                
                title:'Curso Coloracion Canina',
                start:'2023-07-06',
                end:'2023-07-12'
            }
        ]
    }); 

    calendar.render();
  });

