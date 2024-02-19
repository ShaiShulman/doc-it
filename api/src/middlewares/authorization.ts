import { Request, Response, NextFunction } from "express";
import { AUTHORIZATION } from "../utils/config";
import { GPT_SERVICE_AUTH_KEY } from "../utils/config";

/**
 * Middleware function for OpenAI authorization
 * Supports the OpenAI Bearer authorization scheme.
 * To activate authorization for your action, you will need to set the "authorization_type" to "bearer" in the openai.yaml file and set the AUTHORIZATION and GPT_SERVICE_AUTH_KEY environment variables. as well as setting the key in the GPT settings.
 *
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next middleware function.
 */
export const authorizationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (AUTHORIZATION !== "true") {
    next();
    return;
  }

  if (!authHeader) {
    res.status(401).send("Unauthorized: No Authorization header was found");
    return;
  }

  const authParts = authHeader.split(" ");

  if (
    authParts.length !== 2 ||
    authParts[0] !== "Bearer" ||
    authParts[1] !== GPT_SERVICE_AUTH_KEY
  ) {
    res.status(401).send("Unauthorized: Invalid Authorization header");
    return;
  }

  next();
};
