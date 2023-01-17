import { FieldValues, UseFormRegister } from "react-hook-form"
import { Input } from "./style"

interface ICInput {
  inputText: string
  id: string
  register: UseFormRegister<FieldValues>
  registerAttr: string
  errorText: any
}

const CInput = ({
  inputText,
  id,
  register,
  registerAttr,
  errorText,
}: ICInput) => {
  return (
    <>
      <p>{inputText}</p>
      <Input {...register(registerAttr)} id={id} type="number" />
      <p className="error-msg">{errorText[registerAttr]?.message}</p>
    </>
  )
}

export default CInput
