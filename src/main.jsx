import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './context/UserContext.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <Provider store={store}>
      <UserContext>
        <App />
        <ToastContainer />
      </UserContext>
    </Provider>
  );
} else {
  console.error('Root element not found');
}
