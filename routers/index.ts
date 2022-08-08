import { Router } from "express";
import candidateRouter from "./candidateRouter.js";

const router = Router();
router.use("/candidates", candidateRouter);

export default router;
