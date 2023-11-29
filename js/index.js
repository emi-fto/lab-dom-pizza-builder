// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'Spicy salami', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMsr) => {
    if (state.mushrooms) {
      oneMsr.style.visibility = 'visible';
    } else {
      oneMsr.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((oneGrPep) => {
    if (state.greenPeppers) {
      oneGrPep.style.visibility = 'visible';
    } else {
      oneGrPep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  const sauceOpt = document.getElementById('sauceOpt');
  if(state.whiteSauce === false) {
   sauceOpt.classList.remove("sauce-white");
   } else {
  sauceOpt.classList.add("sauce-white");}
}

function renderGlutenFreeCrust() {
  const crustOpt = document.getElementById('crustOpt');
  if(state.glutenFreeCrust === false) {
  crustOpt.classList.remove("crust-gluten-free");
   } else {
  crustOpt.classList.add("crust-gluten-free");}
}

function renderButtons() {
  document.querySelectorAll('.btn').forEach((oneBtn) => {
    if (state.keys) {oneBtn.classList.add("active");}
    else {oneBtn.classList.remove("active");}
  });
}

function renderPrice() {
  const pepPrice = document.getElementById('pepPrice');
  if (state.pepperoni) {
    pepPrice.style.visibility = 'visible';
    pepPrice.innerHTML = `$${ingredients.pepperoni.price} ${ingredients.pepperoni.name}`;
  } else {pepPrice.style.visibility = 'hidden'}
  const musPrice = document.getElementById('musPrice');
  if (state.mushrooms) {
    musPrice.style.visibility = 'visible';
    musPrice.innerHTML = `$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}`;
  } else {musPrice.style.visibility = 'hidden'}
  const grpPrice = document.getElementById('grpPrice');
  if (state.greenPeppers) {
    grpPrice.style.visibility = 'visible';
    grpPrice.innerHTML = `$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}`;
  } else {grpPrice.style.visibility = 'hidden'}
  const whsPrice = document.getElementById('whsPrice');
  if (state.whiteSauce) {
    whsPrice.style.visibility = 'visible';
    whsPrice.innerHTML = `$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}`;
  } else {whsPrice.style.visibility = 'hidden'}
  const cruPrice = document.getElementById('cruPrice');
  if (state.glutenFreeCrust) {
    cruPrice.style.visibility = 'visible';
    cruPrice.innerHTML = `$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}`;
  } else {cruPrice.style.visibility = 'hidden'}

  const total = document.getElementById('total');
  const arrOfPrices = [];
  if (state.pepperoni) {arrOfPrices.push(ingredients.pepperoni.price)}
  if (state.mushrooms) {arrOfPrices.push(ingredients.mushrooms.price)}
  if (state.greenPeppers) {arrOfPrices.push(ingredients.greenPeppers.price)}
  if (state.whiteSauce) {arrOfPrices.push(ingredients.whiteSauce.price)}
  if (state.glutenFreeCrust) {arrOfPrices.push(ingredients.glutenFreeCrust.price)}
 
  const totalPrice = arrOfPrices.reduce((acc, eachPprice) => acc + eachPprice , basePrice);

  total.innerHTML = `$${totalPrice}`;
}


renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
