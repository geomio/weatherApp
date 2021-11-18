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

function getElements(response) {
  if (response.main) {
    $('.showHumidity').text(`The humidity in ${response.name} is ${response.main.humidity}%`);
    $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    let fahrenheit = (response.main.temp - 273.15) * (9 / 5) + 32;
    $('.showNewTemp').text('The temperature in Fahrenheit is:' + fahrenheit);
  } else {
    $('.showErrors').text(`There was an error processing your request: ${response.message}`);
  }
}

$(document).ready(function () {
  $('#weatherLocation').click(function () {
    let city = $('#location').val();
    clearFields();
    WeatherService.getWeather(city)
      .then(function (response) {
        getElements(response);
      });
  });
});

