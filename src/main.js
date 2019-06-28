import { CalculateAge } from "./ageCalculator.js";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  $('#formOne').submit(function(){
    event.preventDefault();
    const earthAge = $('#ageInput').val();
    const earthLife = $('#lifeInput').val();
    // const result = new CalculateAge(earthAge, earthLife);
    // $('.output').append(result.mercuryYears());
  });
});
