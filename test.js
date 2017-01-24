const _ = require('lodash');

//NORMAL FUNCTIONS
(function() {
  const sauce = 'sauce';

  const lasagne = function(firstIngredient, secondIngredient) {
    return firstIngredient + ' ' + secondIngredient;
  }

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {resolve('pasta')}, 1000);
  });

  promise
    .then(result => lasagne(sauce, result))
    .then((result) => {
      console.log('1. yum!', result);
    });

})();


//LODASH CURRY
(function() {
  const sauce = 'sauce';

  const lasagne = _.curry(function(firstIngredient, secondIngredient) {
    return firstIngredient + ' ' + secondIngredient;
  })

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {resolve('pasta')}, 1000);
  });

  promise
    .then(lasagne(sauce))
    .then((result) => {
      console.log('2. yum!', result);
    });

})();


//EXPLANATION
(function() {
  const sauce = 'sauce';

  const lasagne = function(firstIngredient) {
    return (secondIngredient) => {
      return firstIngredient + ' ' + secondIngredient;
    }
  }

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {resolve('pasta')}, 1000);
  });

  promise
    .then(result => lasagne(sauce)(result))
    .then((result) => {
      console.log('3. yum!', result);
    });

})();


