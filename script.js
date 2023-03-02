// Get the next and previous buttons
const nextBtn = document.querySelector('.carousel-control-next');
const prevBtn = document.querySelector('.carousel-control-prev');

// Get the product container
const productContainer = document.querySelector('.product-container');

// Get the width of the product container and each card
const containerWidth = productContainer.offsetWidth;
const cardWidth = document.querySelector('.card').offsetWidth;

// Calculate the number of cards that can fit in the container
const numVisibleCards = Math.floor(containerWidth / cardWidth);

// Get the current position of the product container
let currentPosition = 0;

// Function to move the product container to the left
const moveLeft = () => {
  currentPosition = Math.max(currentPosition - cardWidth * numVisibleCards, -cardWidth * (productContainer.children.length - numVisibleCards));
  productContainer.style.transform = `translateX(${currentPosition}px)`;
};

// Function to move the product container to the right
const moveRight = () => {
  currentPosition = Math.min(currentPosition + cardWidth * numVisibleCards, 0);
  productContainer.style.transform = `translateX(${currentPosition}px)`;
};

// Add event listeners to the buttons
nextBtn.addEventListener('click', moveLeft);
prevBtn.addEventListener('click', moveRight);
