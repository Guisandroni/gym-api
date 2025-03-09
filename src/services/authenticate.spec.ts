import { describe, expect, it, test } from "vitest";
import {  hash } from "bcryptjs";
import { inMemory } from "../repositories/memory/in-memory";
import {  AuthenticateUsersService } from "./authenticate";


describe("Serviço Registro usuario", () => {
  it("está senha é a mesma da cadastrada", async () => {
    const registerInMemory = new inMemory();
    const authenticateUsers = new AuthenticateUsersService(registerInMemory);
    
    await registerInMemory.create({
      name: "giberto",
      email: "gil@gmail.com",
      password_hash:await hash ("123gil123",6),
    });

    const {user} = await authenticateUsers.execute({
      email:"gil@gmail.com",
      password:"123gil123"
    })

    expect(user.id).toEqual(expect.any(String));
  });


// it("registro com o mesmo email", async () => {
//   const registerInMemory = new inMemory();
//   const registerUserService = new RegisterUserService(registerInMemory);

//   const email = "gil@gmail.com";
//   await registerUserService.execute({
//     name: "giberto",
//     email,
//     password: "123gil123",
//   });

//   expect(() =>
//     registerUserService.execute({
//       name: "giberto",
//       email,
//       password: "123gil123",
//     })
//   ).rejects.toBeInstanceOf(UserAlreadyExist);
// });


// it("usuario existe/criado", async () => {
//     const registerInMemory = new inMemory();
//     const registerUserService = new RegisterUserService(registerInMemory);

//     const { user } = await registerUserService.execute({
//       name: "giberto",
//       email: "gil@gmail.com",
//       password: "123gil123",
//     });

//     expect(user.id).toEqual(expect.any(String));
//   });

});

