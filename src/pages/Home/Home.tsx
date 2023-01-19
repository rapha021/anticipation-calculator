import Form from "../../components/form"
import { useGlobalContext } from "../../contexts/GlobalContext"

import Main from "./style"

const Home = () => {
  const { response } = useGlobalContext()

  return (
    <Main>
      <div className="form-fields flex-div">
        <h1>Simule sua Antecipação</h1>
        <Form />
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
