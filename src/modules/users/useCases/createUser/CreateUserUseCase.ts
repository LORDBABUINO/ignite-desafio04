import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    if (
      this.usersRepository
        .list()
        .some(({ email: registredEmail }) => registredEmail === email)
    )
      throw Error();
    return this.usersRepository.create({ email, name });
  }
}

export { CreateUserUseCase };
