import CInput from "../../components/input"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import schema from "../../services/yup"
import { useGlobalContext } from "../../contexts/GlobalContext"
import { Button } from "@chakra-ui/react"

interface IForm {}

const Form = ({}: IForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) })

  const { onSubmitHandler, isLoading } = useGlobalContext()

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <CInput
        id="amounts"
        register={register}
        registerAttr="amount"
        inputText="Informe o valor da venda *"
        errorText={errors}
      />
      <CInput
        id="installments"
        register={register}
        registerAttr="installments"
        inputText="Em quantas parcelas *"
        errorText={errors}
      />
      <CInput
        id="mdr"
        register={register}
        registerAttr="mdr"
        inputText="Informe o percentual de MDR *"
        errorText={errors}
      />

      <Button
        w="295px"
        bgColor="#ff84e8"
        _hover={{ bgColor: "#ff007f" }}
        isLoading={isLoading}
        type="submit"
      >
        Calcular!
      </Button>
    </form>
  )
}

export default Form
