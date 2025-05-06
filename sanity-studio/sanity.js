import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'w4lsvpjx',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  token:
    'skeMECtcl41tABZQNWnCiZRWAZIfzdTfKDSJrKmToIby4aT3xFrUZBK39qlI5ze13DtFT1jl9nbQLyTjUJ3ob3B8PyVhhPvY4MG0dYY0AhqccNc4xqWt7NoyQ9CphIDcChvn5zzEknfY1YrKjVbcRAcGMzEMNrLAi5TTQ9c2kfrGmLeynMkw', // Needed for certain operations like updating content or accessing previewDrafts perspective
})

export const builder = imageUrlBuilder(client)

// uses GROQ to query content: https://www.sanity.io/docs/groq
export const getCategories = async () => {
  const categories = await client.fetch(
    '*[_type == "category"]{_id, title,"imageUrl": image.asset->url}',
  )
  return categories
}
export const getDishes = async () => {
  const dishes = await client.fetch('*[_type == "dish"]')
  return dishes
}
export const getRestaurants = async () => {
  const restaurants = await client.fetch('*[_type == "restaurant"]')
  return restaurants
}

export const createPost = (post) => {
  const result = client.create(post)
  return result
}

export const updateDocumentTitle = (_id, title) => {
  const result = client.patch(_id).set({title})
  return result
}
