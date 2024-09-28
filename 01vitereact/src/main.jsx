import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


const reactElement = React.createElement(
  'a',
  {href: "https://google.com", target: "_blank"},
  'Visit google'
)

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {reactElement}
    <br/>
    <br/>
    {anotherElement}
  </StrictMode>
)
