import * as yup from 'yup';

export const loginSchema = yup
  .object({
    email: yup
      .string()
      .email('Es requerido que ingreses un  email correcto')
      .required('Este campo es requerido.'),
    password: yup.string().required('Este campo es requerido.'),
  })
  .required();
