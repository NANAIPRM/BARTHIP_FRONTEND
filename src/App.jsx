import Router from './route/Router'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div>
      <Router />
      <ToastContainer position="bottom-center" theme="dark" autoClose={4000} />
    </div>
  )
}

export default App
