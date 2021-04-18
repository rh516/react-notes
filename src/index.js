// change require to es6 import style
import $ from 'jquery';
import './styles.scss';

const main = $('#main');
let numSeconds = 0;

function increment() {
  numSeconds += 1;
  main.text(`You've been on this page for ${numSeconds} seconds.`);
}

setInterval(increment, 1000);
