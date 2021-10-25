import { AuthenticateUserController } from "controllers/AuthenticateUserController";
import { Router } from "express";

const routes = Router();

const authenticateUserController = new AuthenticateUserController();

routes.use("/authenticate", authenticateUserController.handle);

export { routes };
