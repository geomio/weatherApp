import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function () {
  $('#weatherLocation').click(function () {
    const city = $('#location').val();
    const lon = $('#longitude').val();
    const lat = $('#latitude').val();
    $('#location').val("");

    let promise = new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      let url;
      if (city) {
        url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`
      } else {
        url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`
      }

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

    promise.then(function (response) {
      const body = JSON.parse(response);
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
      let fahrenheit = (response.main.temp - 273.15) * (9 / 5) + 32
      $('.showNewTemp').text('The temperature in Fahrenheit is:' + fahrenheit);
      $('.showErrors').text("");
    }, function (error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
      $('.showHumidity').text("");
      $('.showTemp').text("");
    });
  });
});

