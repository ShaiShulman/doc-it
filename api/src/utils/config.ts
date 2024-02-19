import dotenv from "dotenv";

dotenv.config();

export const DOC_BASE_URL =
  process.env.DOC_BASE_URL || "http://localhost:3000/document?uuid=";
export const AUTHORIZATION = process.env.AUTHORIZATION || false;
export const TTL = process.env.TTL || 86400;
export const GPT_SERVICE_AUTH_KEY = process.env.GPT_SERVICE_AUTH_KEY || "";
export const PORT = process.env.PORT || 3000;