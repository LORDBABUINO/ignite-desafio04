import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

interface IParams {
  user_id: string;
}

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      return response.json(
        this.showUserProfileUseCase.execute(
          (request.params as unknown) as IParams
        )
      );
    } catch (err) {
      return response.status(404).json({ error: "User not found" });
    }
  }
}

export { ShowUserProfileController };
