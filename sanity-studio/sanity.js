import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'w4lsvpjx',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Needed for certain operations like updating content or accessing previewDrafts perspective
})

export const builder = imageUrlBuilder(client)

// uses GROQ to query content: https://www.sanity.io/docs/groq
export const getCategories = async () => {
  const posts = await client.fetch(
    '*[_type == "category"]{_id, title,"imageUrl": image.asset->url}',
  )
  return posts
}

export const createPost = (post) => {
  const result = client.create(post)
  return result
}

export const updateDocumentTitle = (_id, title) => {
  const result = client.patch(_id).set({title})
  return result
}
