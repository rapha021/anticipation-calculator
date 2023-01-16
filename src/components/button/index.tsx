import Button from "./style"

interface ICButton {
  buttonText: string
}

const CButton = ({ buttonText }: ICButton) => {
  return (
    <>
      <Button>{buttonText}</Button>
    </>
  )
}

export default CButton
