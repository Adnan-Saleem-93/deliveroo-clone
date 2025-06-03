import {create} from 'zustand'

export const useCartStore = create((set) => ({
  items: [],
  restaurant: null,
  totalPrice: 0,
  totalCount: 0,
  wasCartCleared: false,
  addItemToCart: (restaurant, newItem) =>
    set((state) => {
      const total = state.totalPrice + newItem.price
      const updatedItems = [...state.items]
      // check if the same item already exists in cart,
      const matchedItemIndex = updatedItems.findIndex((x) => x._id === newItem._id)

      if (matchedItemIndex > -1) {
        const updateItemObj = updatedItems[matchedItemIndex]
        updateItemObj.cartCount += 1

        updatedItems[matchedItemIndex] = updateItemObj
      } else {
        updatedItems.push({...newItem, cartCount: 1})
      }

      return {
        restaurant,
        items: updatedItems,
        totalPrice: Number(total?.toFixed(2)),
        totalCount: state.totalCount + 1
      }
    }),
  removeItemFromCart: (id) =>
    set((state) => {
      const _items = [...state.items]
      const matchedItemIndex = _items.findIndex((x) => x._id === id)

      if (matchedItemIndex > -1) {
        const item = _items[matchedItemIndex]
        const total = state.totalPrice - item?.price || 0

        if (item.cartCount === 1) {
          _items.splice(matchedItemIndex, 1)
          return {
            items: _items,
            restaurant: null,
            totalPrice: Number(total?.toFixed(2)),
            totalCount: state.totalCount - 1
          }
        } else {
          item.cartCount -= 1
          _items[matchedItemIndex] = item
          return {
            items: _items,
            totalPrice: Number(total?.toFixed(2)),
            totalCount: state.totalCount - 1
          }
        }
      }
      return {items: [...state.items]}
    }),
  clearCart: () =>
    set(() => {
      return {items: [], restaurant: null, totalPrice: 0, wasCartCleared: true, totalCount: 0}
    }),

  resetWasCartClearedStatus: () =>
    set((state) => {
      return {...state, wasCartCleared: false}
    })
}))
