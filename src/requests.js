export const requests = [
    fetch('https://api.rasp.yandex.net/v3.0/schedule/' +                     // вылет из SVO (arrived)
        '?apikey=d09d0468-dda6-4d07-bb6e-943b70b49868&station=SVO' +
        '&lang=en_RU&date=2018-11-07&' +
        'transport_types=plane&system=iata', {mode: 'no-cors'}),
    fetch('https://api.rasp.yandex.net/v3.0/search/' +                       // вылет из JFK в SVO (departed)
        '?apikey=d09d0468-dda6-4d07-bb6e-943b70b49868&format=json&' +
        'from=JFK&to=SVO&lang=en_RU&&page=1&date=2018-11-07&system=iata', {mode: 'no-cors'}),
    fetch('https://api.rasp.yandex.net/v3.0/search/' +                       // вылет из LHR в SVO (departed)
        '?apikey=d09d0468-dda6-4d07-bb6e-943b70b49868&format=json&' +
        'from=LHR&to=SVO&lang=en_RU&&page=1&date=2018-11-07&system=iata', {mode: 'no-cors'}),
    fetch('https://api.rasp.yandex.net/v3.0/search/' +                       // вылет из AMS в SVO (departed)
        '?apikey=d09d0468-dda6-4d07-bb6e-943b70b49868&format=json&' +
        'from=AMS&to=SVO&lang=en_RU&&page=1&date=2018-11-07&system=iata', {mode: 'no-cors'})
]