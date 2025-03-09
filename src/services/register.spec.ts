import { describe, expect, it, test } from "vitest";
import { RegisterUserService } from "./register-user";
import { compare } from "bcryptjs";
import { inMemory } from "../repositories/memory/in-memory";
import { UserAlreadyExist } from "./erros/user-exist";


//hash da senha pe gerado
describe("Serviço Registro usuario", () => {
  it("está senha é a mesma da cadastrada", async () => {
    const registerInMemory = new inMemory();
    const registerUserService = new RegisterUserService(registerInMemory);

    const { user } = await registerUserService.execute({
      name: "giberto",
      email: "gil@gmail.com",
      password: "123gil123",
    });
    const PasswordIsCorrect = await compare("123gil123", user.password_hash);

    expect(PasswordIsCorrect).toBe(true);
  });


it("registro com o mesmo email", async () => {
  const registerInMemory = new inMemory();
  const registerUserService = new RegisterUserService(registerInMemory);

  const email = "gil@gmail.com";
  await registerUserService.execute({
    name: "giberto",
    email,
    password: "123gil123",
  });

  expect(() =>
    registerUserService.execute({
      name: "giberto",
      email,
      password: "123gil123",
    })
  ).rejects.toBeInstanceOf(UserAlreadyExist);
});


it("usuario existe/criado", async () => {
    const registerInMemory = new inMemory();
    const registerUserService = new RegisterUserService(registerInMemory);

    const { user } = await registerUserService.execute({
      name: "giberto",
      email: "gil@gmail.com",
      password: "123gil123",
    });

    expect(user.id).toEqual(expect.any(String));
  });

});
// usuario ja existe
// usuario e criado
