// Define the global variables: input, button, and greeting.
let nameInput;
let button;
let greeting;

function setup() {
  createCanvas(1, 0);
  background(255);

  // Use the greeting variable to ask for the person's name.
  greeting = createElement('h2', 'Sign in');
  greeting.position(20, 55);

  // Create the input and button in the canvas.
  nameInput = createInput();
  nameInput.position(20, 105);
  nameInput = createInput();
  nameInput.position(20, 130);

  button = createButton('OK');
  button.position(nameInput.x + nameInput.width, 130);

  // Use the mousePressed() method to call the greet()
  // function when the button is pressed.
  button.mousePressed(greet);

  // Also call greet when input is changed and enter/return button is pressed
  nameInput.changed(greet);
}

function greet() {
  // Refresh the canvas background to clear any
  // previous inputs.
  background(255);

  // Connect the name variable to the input's value.
  let name = nameInput.value();

  // Update the greeting to state the person's name.
  greeting.html(`Wrong Password--${name}`);

  // Clear the input's value.
  nameInput.value('');

  // Draw name on the canvas
  textSize(100);
  textAlign(CENTER, CENTER);
  text(name, width / 2, height / 2);

  describe(`The name ${name} in large black text on a white background.`);
}