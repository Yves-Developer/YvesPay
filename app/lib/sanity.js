/** @format */
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
export const client = createClient({
  projectId: "objywsh2",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});
const builder = imageUrlBuilder(client);
export function urlFor(source) {
  return builder.image(source);
}
