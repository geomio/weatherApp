import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

//Weather api info below
// {
//   "coord": {
//       "lon": -70.2549,
//       "lat": 43.661
//   },
//   "weather": [
//       {
//           "id": 800,
//           "main": "Clear",
//           "description": "clear sky",
//           "icon": "01d"
//       }
//   ],
//   "base": "stations",
//   "main": {
//       "temp": 295.1,
//       "feels_like": 294.97,
//       "temp_min": 291.93,
//       "temp_max": 297.82,
//       "pressure": 1025,
//       "humidity": 62
//   },
//   "visibility": 10000,
//   "wind": {
//       "speed": 0.45,
//       "deg": 214,
//       "gust": 3.13
//   },
//   "clouds": {
//       "all": 1
//   },
//   "dt": 1633627867,
//   "sys": {
//       "type": 2,
//       "id": 2002830,
//       "country": "US",
//       "sunrise": 1633603540,
//       "sunset": 1633644695
//   },
//   "timezone": -14400,
//   "id": 4975802,
//   "name": "Portland",
//   "cod": 200
// }