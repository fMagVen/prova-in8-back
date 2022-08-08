import * as candidateRepository from "../repositories/candidateRepository.js";
import * as errorUtils from "../utils/errorUtils.js";

export interface candidateData {
  name: string;
  email: string;
  birth: string;
  phone: string;
}

export function createCandidate(data: candidateData) {
  const takenName = candidateRepository.verifyCandidateByName(data.name);
  if (takenName)
    throw errorUtils.conflictError("Este candidato ja está cadastrado!");
  const takenMail = candidateRepository.verifyCandidateByEmail(data.email);
  if (takenMail)
    throw errorUtils.conflictError(
      "Já existe um candidato cadastrado com esse email"
    );

  candidateRepository.createCandidate(data);
}

export function getCandidates() {
  const candidates = candidateRepository.getCandidates();
  return candidates;
}
