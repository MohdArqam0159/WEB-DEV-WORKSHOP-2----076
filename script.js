let cartButtons = document.querySelectorAll('.add-cart');
let cartCount = document.getElementById('cart-count');
let count = 0;

cartButtons.forEach(button => {
  button.addEventListener('click', () => {
    count++;
    cartCount.innerText = count;

    button.innerText = 'Added ✓';
    button.style.background = 'green';
    button.style.color = 'white';

    setTimeout(() => {
      button.innerText = 'Add to Cart';
      button.style.background = '#ffd814';
      button.style.color = 'black';
    }, 1000);
  });
});

// Search Functionality

let searchInput = document.getElementById('searchInput');
let cards = document.querySelectorAll('.card');

searchInput.addEventListener('keyup', () => {

  let value = searchInput.value.toLowerCase();

  cards.forEach(card => {

    let productName = card.querySelector('h3').innerText.toLowerCase();

    if(productName.includes(value)) {
      card.style.display = 'block';
    }
    else {
      card.style.display = 'none';
    }

  });

});