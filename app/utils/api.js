import {client} from '../../sanity-studio/sanity'

export const getCategories = async () => {
  const categories = await client.fetch(
    '*[_type == "category"]{_id, title,"imageUrl": image.asset->url}'
  )
  return categories
}

export async function getFeaturedCategories() {
  try {
    const featuredCategories = await client.fetch(
      `*[_type == "featured"]{
        ...,
        restaurants[]->{
          ...,
          dishes[]->{
          }
        }
      }`,
      {},
      {next: {revalidate: 600}}
    )

    return featuredCategories
  } catch (error) {
    console.log(error)
    return []
  }
}

export async function getFeaturedCategoryById(id) {
  try {
    const featuredRestaurants = await client.fetch(
      `*[_type == "featured" && _id == $id]{
        ...,
        restaurants[]->{
          ...,
          "imageUrl": image.asset->url,
          category->{
            title
          },
          dishes[]->{
          }
        }
      }[0]`,
      {id},
      {next: {revalidate: 600}}
    )

    return featuredRestaurants
  } catch (error) {
    console.log(error)
    return []
  }
}

export async function getRestaurantById(id) {
  try {
    const restaurant = await client.fetch(
      `*[_type == "restaurant" && _id == $id]{
        ...,
        "imageUrl": image.asset->url,
        dishes[]->{
          ...,
        }
      }[0]`,
      {id},
      {next: {revalidate: 600}}
    )

    return restaurant
  } catch (error) {
    console.log(error)
    return []
  }
}
