import Joi from "joi";

export const productValidation = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  price: Joi.number().min(0).required(),
  category: Joi.string().required(),
  description: Joi.string().max(1000).required()
});
