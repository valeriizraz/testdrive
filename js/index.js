'use strict'

const myName = 'Валерий';
const hello = `Привет ${myName}`;

console.log(hello);

const birthYear = 1985;
const newYear = new Date().getFullYear();

document.body.innerHTML = 
  `<h1 class="title">Привет ${myName} !</h1>
  <p>Сейчас ${new Date().getFullYear()} год</p>`;

  console.log('Привет ' + 'мой ' + 'друг');


const obj = {
  str: 'hello',
  num: 5,
  bool: true,
  arr: [1, 2, 3],
  foo() {

  },
  obj: {
    a: 1,
    b: 2,
  }
};

console.log(obj);
console.log('obj: ',typeof obj);

const arr = [[1, 2, 3], {a: 1, b: 2}, true, 5, 'str',
  () => {}];
console.log('arr: ', arr);

const foo = () => {};
console.log('foo: ',typeof foo);

const err = new Error();
console.log('err: ',typeof err);

const emptyBox = null;
console.log('null: ',typeof emptyBox);