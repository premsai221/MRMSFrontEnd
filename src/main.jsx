import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {CommonProvider} from './components/hooks/CommonProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CommonProvider>
      <App />
    </CommonProvider>
  </React.StrictMode>,
)
