import Form from "../../components/form"

import api from "../../services/api-axios"
import Main from "./style"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

interface IResponse {
  1: number
  15: number
  30: number
  90: number
}

const Home = () => {
  const [response, setResponse] = useState({} as IResponse)
  const [isOnline, setIsOnline] = useState(navigator.onLine)

  const onSubmitHandler = async (data: any) => {
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

    toast.promise(
      apiResponse,
      {
        pending: "Calculando...",
        error: "Não foi possivel. Tente novamente!",
        success: "Calculado!",
      },
      { toastId: "api-response", theme: "dark" }
    )
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
    <Main>
      <div className="form-fields flex-div">
        <h1>Simule sua Antecipação</h1>
        <Form onSubmitHandler={onSubmitHandler} />
      </div>

      <div className="results flex-div">
        <h2>VOCÊ RECEBERÁ:</h2>

        <p>Amanhã: R${response[1]?.toFixed(2).replace(".", ",")}</p>
        <p>Em 15 dias: R${response[15]?.toFixed(2).replace(".", ",")}</p>
        <p>Em 30 dias: R${response[30]?.toFixed(2).replace(".", ",")}</p>
        <p>Em 90 dias: R${response[90]?.toFixed(2).replace(".", ",")}</p>
      </div>
    </Main>
  )
}

export default Home
