const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer);

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()))

// Dispatch the "INCREMENT" action every time the +1 button is pressed
const incrementButton = document.getElementById('increment');
incrementButton.addEventListener('click', e => dispatch({ type: "CHANGEVALUE", value: 1 }));

// Dispatch the "DECREMENT" action every time the +1 button is pressed
const decrementButton = document.getElementById('decrement');
decrementButton.addEventListener('click', e => dispatch({ type: "CHANGEVALUE", value: - 1 }));

// Dispatch the "INCREMENT FIVE" action every time the +5 button is pressed
const incrementFiveButton = document.getElementById('incrementFive');
incrementFiveButton.addEventListener('click', e => dispatch({ type: "CHANGEVALUE", value: 5 }));

// Dispatch the "DECREMENT FIVE" action every time the +5 button is pressed
const decrementFiveButton = document.getElementById('decrementFive');
decrementFiveButton.addEventListener('click', e => dispatch({ type: "CHANGEVALUE", value: - 5 }));

// Dispatch the "colors" action every time a color button is pressed
const colorDropdown = document.getElementById('colors');
colorDropdown.addEventListener('change', e => dispatch({ type: "CHANGECOLOR", value: colorDropdown.value }));