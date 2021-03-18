import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    if (this.usersRepository.list().some(({ id }) => id === user_id))
      return this.usersRepository.findById(user_id);
    throw Error();
  }
}

export { ShowUserProfileUseCase };
