import Joi from "joi";
import { candidateData } from "../services/candidateService.js";

const createCandidateSchema = Joi.object<candidateData>({
  name: Joi.string().required(),
  email: Joi.string().required(),
  birth: Joi.string().required(),
  phone: Joi.string().required(),
});

export default createCandidateSchema;
