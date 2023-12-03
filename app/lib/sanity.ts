import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId:"rzmd8dze",
    dataset:"production",
    apiVersion:"2023-11-22",
    useCdn: true,
});
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}