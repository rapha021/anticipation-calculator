import * as yup from "yup"

export interface IFormData {
  amount: number
  installments: number
  mdr: number
}

const schema = yup.object().shape({
  amount: yup
    .number()
    .typeError("Insira um numero")
    .required("Campo Obrigatorio")
    .positive("Numero invalido")
    .min(1000, "Valor da venda precisa ser no minimo R$1000"),
  installments: yup
    .number()
    .typeError("Insira um numero")
    .required("Campo Obrigatorio")
    .positive("Numero invalido")
    .max(12, "Parcelas tem que ser no maximo 12 vezes"),
  mdr: yup
    .number()
    .typeError("Insira um numero")
    .required("Campo Obrigatorio")
    .max(100, "Mdr tem que ser no maximo 100"),
})

export default schema
