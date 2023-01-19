import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"
import api from "../services/api-axios"
import { toast } from "react-toastify"
import { IFormData } from "../services/yup"
import { FieldValues, SubmitHandler } from "react-hook-form"

interface IGlobalContextProps {
  children: ReactNode
}

interface IGlobalContext {
  response: IResponse
  onSubmitHandler: SubmitHandler<FieldValues>
  isLoading: boolean
}

interface IResponse {
  1: number
  15: number
  30: number
  90: number
}

export const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext)

const GlobalProvider = ({ children }: IGlobalContextProps) => {
  const [response, setResponse] = useState({} as IResponse)
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitHandler = async (data: any) => {
    setIsLoading(true)

    const apiResponse = api
      .post(`/`, {
        amount: data.amount,
        installments: data.installments,
        mdr: data.mdr,
      })
      .then(({ data }) => {
        setResponse(data)
        return data
      })

    await toast.promise(
      apiResponse,
      {
        pending: "Calculando...",
        error: "Não foi possivel. Tente novamente!",
        success: "Calculado!",
      },
      { toastId: "api-response", theme: "dark" }
    )

    setIsLoading(false)
  }

  useEffect(() => {
    const handleConnection = () => {
      setIsOnline(navigator.onLine)
      const noConnection = toast.error("Sem conexão!", {
        toastId: "connection",
        closeButton: false,
        closeOnClick: false,
        isLoading: true,
        theme: "dark",
      })

      navigator.onLine &&
        toast.update(noConnection, {
          render: "conexão estabilizada!",
          type: "success",
          isLoading: false,
          autoClose: 1500,
        })

      navigator.onLine ? console.log("online") : console.log("offline")
    }

    window.addEventListener("online", handleConnection)

    window.addEventListener("offline", handleConnection)

    return () => {
      window.removeEventListener("online", handleConnection)
      window.removeEventListener("offline", handleConnection)
    }
  }, [isOnline])

  return (
    <GlobalContext.Provider value={{ response, onSubmitHandler, isLoading }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)

export default GlobalProvider
