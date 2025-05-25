export const backNavigation = (navigation) => {
  return navigation?.canGoBack ? navigation?.goBack() : navigation?.navigate('Home')
}
