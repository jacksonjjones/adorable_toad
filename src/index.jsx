import ReactDOM from 'react-dom/client'; // Import ReactDOM from 'react-dom/client' library for server components
import App from './App.jsx'; // Import the main App component
import './index.css'; // Import the CSS file for styling

// Use ReactDOM's createRoot method to render the root element
// and pass the App component as its child
ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);
