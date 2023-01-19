import React from "react"
import ReactDOM from "react-dom/client"
import { ToastContainer } from "react-toastify"
import App from "./App"
import "./index.css"
import "react-toastify/dist/ReactToastify.css"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import GlobalProvider from "./contexts/GlobalContext"

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#2a2d43",
      },
    },
  },
  initialColorMode: "dark",
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalProvider>
      <ChakraProvider theme={theme}>
        <App />
        <ToastContainer />
      </ChakraProvider>
    </GlobalProvider>
  </React.StrictMode>
)
