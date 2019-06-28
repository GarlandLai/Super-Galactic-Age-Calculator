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
    $('.output').append("Mars years: " + (parseFloat(result.returnMars().toFixed(1))));
    $('.output').append("Jupiter years: " + (parseFloat(result.returnJupiter().toFixed(1))));
    $('.output').append("Mercury years left: " + (parseFloat(result.mercuryExpect().toFixed(1))));
    $('.output').append("Venus years left: " + (parseFloat(result.venusExpect().toFixed(1))));
    $('.output').append("Mars years left: " + (parseFloat(result.marsExpect().toFixed(1))));
    $('.output').append("Jupiter years left: " + (parseFloat(result.jupiterExpect().toFixed(1))));
  });
});
