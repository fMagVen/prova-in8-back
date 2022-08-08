import { Router } from "express";
import * as candidateController from "../controllers/candidateController.js";
import { validateSchema } from "../middlewares/schemaValidator.js";
import createCandidateSchema from "../schemas/candidateSchema.js";

const candidateRouter = Router();

candidateRouter.post(
  "/create",
  validateSchema(createCandidateSchema),
  candidateController.createCandidate
);

candidateRouter.get("/get", candidateController.getCandidates);

export default candidateRouter;
