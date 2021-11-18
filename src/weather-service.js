export default class WeatherService {
  static getWeather(city) {
    // const lon = $('#longitude').val();
    // const lat = $('#latitude').val();
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      let url;
      if (city) {
        url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`
      }
      //  else {
      //   url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`
      // }

      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response)
        }
      }

      request.open("GET", url, true);
      request.send();
    });
  }


}