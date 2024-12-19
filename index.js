// Define the currentUser variable
const currentUser = 'Grace Hopper';

// Create a personalized welcome message using string interpolation
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// Create an excited version of the welcome message by converting it to uppercase
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// Create a short greeting that includes only the first character of the current user's name
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
