export class InvalideCredentialError extends Error {
    constructor() {
      super("usuario ja existe");
    }
  }
  