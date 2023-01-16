import Form from "../../components/form"

import api from "../../services/api-axios"
import Main from "./style"
import { useState } from "react"
import { toast } from "react-toastify"

interface IResponse {
  1: number
  15: number
  30: number
  90: number
}

const Home = () => {
  const [response, setResponse] = useState({} as IResponse)

  const onSubmitHandler = async (data: any) => {
    await api
      .post(`/`, {
        amount: data.amount,
        installments: data.installments,
        mdr: data.mdr,
      })
      .then(({ data }) => setResponse(data))
  }

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
