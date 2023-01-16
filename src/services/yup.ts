import * as yup from "yup"

const schema = yup.object().shape({
  amount: yup
    .number()
    .required("Campo Obrigatorio")
    .positive("Numero invalido")
    .min(1000, "Valor da venda precisa ser no minimo R$1000"),
  installments: yup
    .number()
    .required("Campo Obrigatorio")
    .positive("Numero invalido")
    .max(12, "Parcelas tem que ser no maximo 12 vezes"),
  mdr: yup.number().required("Campo Obrigatorio"),
})

export default schema
