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
      <Input {...register(registerAttr)} id={id} type="text" />
      <p>{errorText[registerAttr]?.message}</p>
    </>
  )
}

export default CInput
