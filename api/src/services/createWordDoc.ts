import MarkdownIt from "markdown-it";
import { storeDoc } from "../utils/cache";
import { asBlob } from "html-docx-js-typescript";

/**
 * Creates a Word document from the given markdown text, store it as a blob in the cash and return its uuid.
 *
 * @param markdownText The markdown text to convert to a Word document.
 * @returns A promise that resolves to the uuid key of the Word document in the cache.
 */
export async function createWordDoc(markdownText: string) {
  const md = new MarkdownIt();
  const html = md.render(
    markdownText.replace(/\n/g, "  \n").replace(/\t/g, "&#9;")
  );
  const buffer = await asBlob(html);

  return storeDoc(buffer);
}
