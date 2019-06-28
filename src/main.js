import { CalculateAge } from "./ageCalculator.js";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  $('#formOne').submit(function(){
    event.preventDefault();
    const earthAge = parseInt($('#ageInput').val());
    const earthLife = parseInt($('#lifeInput').val());
    const result = new CalculateAge(earthAge, earthLife);
    console.log(result);
    $('.output').append("Mercury years: " + (parseFloat(result.returnMercury().toFixed(1))));
    $('.output').append("Venus years: " + (parseFloat(result.returnVenus().toFixed(1))));
  });
});
