import { CalculateAge } from "./ageCalculator.js";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  $('#formOne').submit(function(){
    event.preventDefault();
    const earthAge = $('#ageInput').val();
    console.log(earthAge);
    const earthLife = $('#lifeInput').val();
    console.log(earthLife);
    const result = new CalculateAge(earthAge, earthLife);
    console.log(result);
    const mercury = returnMercury(earthAge);
    console.log(mercury);
  });
});
