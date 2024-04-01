// Your code here
// Import the required function from helpers.js
const { moveDodgerLeft, moveDodgerRight } = require('./helpers');

describe('moveDodgerLeft()', () => {
  let dodger;

  beforeEach(() => {
    dodger = document.createElement('div');
    dodger.id = 'dodger';
    document.body.appendChild(dodger);
    dodger.style.left = '180px'; // Set initial left position for testing
  });

  afterEach(() => {
    document.body.removeChild(dodger);
  });

  it('moves the DODGER to the left', () => {
    const left = parseInt(dodger.style.left);

    moveDodgerLeft();

    const newPosition = parseInt(dodger.style.left);
    expect(newPosition).to.be.below(left);
  });
});

describe('moveDodgerRight()', () => {
  let dodger;

  beforeEach(() => {
    dodger = document.createElement('div');
    dodger.id = 'dodger';
    document.body.appendChild(dodger);
    dodger.style.left = '180px'; // Set initial left position for testing
  });

  afterEach(() => {
    document.body.removeChild(dodger);
  });

  it('moves the DODGER to the right', () => {
    const left = parseInt(dodger.style.left);

    moveDodgerRight();

    const newPosition = parseInt(dodger.style.left);
    expect(newPosition).to.be.above(left);
  });
});
