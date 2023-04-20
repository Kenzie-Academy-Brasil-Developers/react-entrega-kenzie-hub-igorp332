import { RoutesMain } from "./routes"
import { GlobalStyle } from "./styles/global"
import { ToastContainer } from "react-toastify"
import Modal from "react-modal";

Modal.setAppElement('#root')

function App() {
  return (
    <>
      <GlobalStyle/>
      <RoutesMain/>
      <ToastContainer/>
    </>
  )
}

export default App
