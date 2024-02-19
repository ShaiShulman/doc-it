import { v4 as uuidv4 } from "uuid";
import NodeCache from "node-cache";
import { TTL } from "../utils/config";
const imageCache = new NodeCache();

/**
 * Stores a document in the cache and returns a unique identifier.
 * @param doc The document to be stored in the cache as a Buffer or Blob.
 * @returns The unique identifier for the stored document.
 */
export const storeDoc = (doc: Buffer | Blob): string => {
  const uuid = uuidv4();
  imageCache.set(uuid, doc, TTL);
  return uuid;
};

/**
 * Retrieves a document from the cache based on its unique id.
 *
 * @param uuid - The UUID of the document.
 * @returns The document as a Buffer or Blob, or undefined if not found.
 */
export const getDocFromUUID = (uuid: string): Buffer | Blob | undefined => {
  return imageCache.get<Blob>(uuid);
};
