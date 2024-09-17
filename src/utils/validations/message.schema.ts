import * as yup from 'yup';

export const messageSchema = yup
  .object({
    title: yup.string().required(),
    message: yup.string().required(),
  })
  .required();
