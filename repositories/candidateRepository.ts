import { candidateData } from "../services/candidateService.js";

const candidates = [];

export function createCandidate(data: candidateData) {
  candidates.push(data);
}

export function verifyCandidateByEmail(email: string) {
  let index = 0;
  while (candidates[index] !== undefined) {
    if (candidates[index].email === email) return true;
    index++;
  }
  return false;
}

export function verifyCandidateByName(name: string) {
  let index = 0;
  while (candidates[index] !== undefined) {
    if (candidates[index].name === name) return true;
    index++;
  }
  return false;
}

export function getCandidates() {
  return candidates;
}
