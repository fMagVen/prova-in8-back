import { Request, Response } from "express";
import * as candidateService from "../services/candidateService.js";

export function createCandidate(req: Request, res: Response) {
  const newCandidate = req.body;
  candidateService.createCandidate(newCandidate);
  res.sendStatus(201);
}

export function getCandidates(req: Request, res: Response) {
  const candidates = candidateService.getCandidates();
  res.status(200).send(candidates);
}
