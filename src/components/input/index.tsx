import { FieldValues, UseFormRegister } from "react-hook-form"
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react"

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

      <NumberInput borderColor="#ffacf0" focusBorderColor="#ff84e8" w="295px">
        <NumberInputField
          _hover={{ borderColor: "#ff84e8" }}
          {...register(registerAttr)}
        />
        <NumberInputStepper>
          <NumberIncrementStepper
            color="#fff"
            _active={{ bgColor: "none" }}
            borderLeftColor="#ff84e8"
          />
          <NumberDecrementStepper
            color="#fff"
            _active={{ bgColor: "none" }}
            borderLeftColor="#ff84e8"
          />
        </NumberInputStepper>
      </NumberInput>

      <p className="error-msg">{errorText[registerAttr]?.message}</p>
    </>
  )
}

export default CInput
