/**
 * Created by apple on 18/8/7.
 */
import css from './css/style.css';
import scss from './scss/style.scss';
// import $ from 'jquery';
let weichuang = require('../weichuang.json');


// var oDiv1 = document.getElementById('div1');
// oDiv1.innerHTML = 'hello world111sssss';

$('#div1').html(`唯创${weichuang.boss},${weichuang.age}`);


// let a = 10;
// let b = (c)=>{
//     console.log(c);
// }
// b(a);