import {client} from '../../sanity-studio/sanity'

export async function getFeaturedCategories() {
  try {
    const featuredCategories = await client.fetch(
      '*[_type == "featured"]',
      {},
      {next: {revalidate: 600}}
    )

    return featuredCategories
  } catch (error) {
    console.log(error)
    return []
  }
}
