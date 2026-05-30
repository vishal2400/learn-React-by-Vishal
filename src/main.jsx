import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' // a built-in function, 
// used to create a root node for a React application

import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  // .render is React method not a built-in function of JS, used to render a React component into the DOM
  <StrictMode>
      <App />
  </StrictMode>,
)
 