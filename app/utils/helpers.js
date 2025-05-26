export const backNavigation = (navigation) => {
  return navigation?.canGoBack ? navigation?.goBack() : navigation?.navigate('Home')
}

export const generateUUID = () => {
  // Generates a RFC4122 version 4 compliant UUID
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export const filterItemCountById = (items, id) => {
  if (items?.length > 0) {
    const itemsById = items.filter((x) => x._id === id)
    const itemLength = itemsById?.length

    return itemLength
  }

  return 0
}
