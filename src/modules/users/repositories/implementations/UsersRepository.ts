import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User(name, email);
    this.users.push(user);
    return user;
  }

  findById(id: string): User | undefined {
    return this.users.find(({ id: registredId }) => registredId === id);
  }

  findByEmail(email: string): User | undefined {
    return this.users.find(
      ({ email: registredEmail }) => registredEmail === email
    );
  }

  turnAdmin(receivedUser: User): User {
    return Object.assign(receivedUser, {
      ...receivedUser,
      admin: true,
    });
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
