// Create a React element
const helloWorldElement = React.createElement('h1', null, 'Hello, World!');

// Find the root element in the HTML
const rootElement = document.getElementById('root');

// Render the React element into the root element
ReactDOM.render(helloWorldElement, rootElement);
