import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    if (this.usersRepository.findById(user_id).admin)
      return this.usersRepository.list();
    throw Error();
  }
}

export { ListAllUsersUseCase };
