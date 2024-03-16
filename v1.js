// // Set the coordinates where you want to click (in pixels)
// const clickX = 200; // X coordinate
// const clickY = 520; // Y coordinate

// // Set the interval (in milliseconds) for autoclicking
// const interval = 13000; // 13000 milliseconds = 13 seconds

// // Function to simulate a mouse click at the specified coordinates
// function clickAt(x, y) {
//     // Create a new mouse event
//     const event = new MouseEvent('click', {
//         bubbles: true,
//         cancelable: true,
//         view: window,
//         clientX: x,
//         clientY: y
//     });
    
//     // Dispatch the event on the document
//     document.elementFromPoint(x, y).dispatchEvent(event);
// }

// // Function to start autoclicking
// function startAutoClicker() {
//     console.log('Auto Clicker started.');
//     setInterval(() => {
//         clickAt(clickX, clickY);
//     }, interval);
// }

// // Start the autoclicker when the page is loaded
// window.addEventListener('load', startAutoClicker);

// Find the button element by its class name
// const button = document.querySelector('.BlackButtonStyled-sc-155f8n4-0.bXMZJW'); 
const button = document.querySelector('.BlackButtonStyled-sc-155f8n4-0 gvlQbP');

// Function to click the button
function clickButton() {
    button.click(); // Simulate a click on the button
}

// Call the function initially to click the button immediately
clickButton();

// Set interval to click the button every 13 seconds
setInterval(clickButton, 13000); // 13 seconds = 13000 milliseconds
