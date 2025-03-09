export class UserAlreadyExist extends Error {
  constructor() {
    super("Email ja existe");
  }
}
