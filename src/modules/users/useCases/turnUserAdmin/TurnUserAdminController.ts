import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

interface IParams {
  user_id: string;
}

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      return response.json(
        this.turnUserAdminUseCase.execute(
          (request.params as unknown) as IParams
        )
      );
    } catch (error) {
      return response.status(404).json({ error: "user not found" });
    }
  }
}

export { TurnUserAdminController };
