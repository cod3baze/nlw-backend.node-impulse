import { Request, Response } from "express";
import { AuthenticateUserService } from "services/AuthenticateUserService";

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { code } = request.body;

    const service = new AuthenticateUserService();
    const data = await service.execute(code as string);

    return response.status(202).json(data);
  }
}

export { AuthenticateUserController };
