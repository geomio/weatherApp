import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import WeatherService from './weather-service.js'

function clearFields() {
  $('#location').val("");
  $('.showErrors').text("");
  $('.showHumidity').text("");
  $('.showTemp').text("");
}

$(document).ready(function () {
  $('#weatherLocation').click(function () {
    let city = $('#location').val();
    clearFields();
    let promise = WeatherService.getWeather(city);
    promise.then(function (response) {
      const body = JSON.parse(response);
      $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
      let fahrenheit = (body.main.temp - 273.15) * (9 / 5) + 32
      $('.showNewTemp').text('The temperature in Fahrenheit is:' + fahrenheit);
      $('.showErrors').text("");
    }, function (error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
      $('.showHumidity').text("");
      $('.showTemp').text("");
    });
  });
});

