import CInput from "../../components/input"
import CButton from "../../components/button"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import schema from "../../services/yup"

interface IForm {
  onSubmitHandler: (data: any) => void
}

const Form = ({ onSubmitHandler }: IForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) })

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

      <CButton buttonText="Calcular!" />
    </form>
  )
}

export default Form
