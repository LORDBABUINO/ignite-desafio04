import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

interface IHeader {
  user_id: string;
}

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      return response.json(
        this.listAllUsersUseCase.execute(
          (request.headers as unknown) as IHeader
        )
      );
    } catch (err) {
      return response.status(400).json({ error: "Only admins can list users" });
    }
  }
}

export { ListAllUsersController };
