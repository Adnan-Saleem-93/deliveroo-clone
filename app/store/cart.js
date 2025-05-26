import {create} from 'zustand'

export const useCartStore = create((set) => ({
  items: [],
  totalPrice: 0,
  showCartCard: true,
  addItemToCart: (newItem) =>
    set((state) => {
      const total = state.totalPrice + newItem.price

      return {items: [...state.items, newItem], totalPrice: Number(total?.toFixed(2))}
    }),
  removeItemFromCart: (id) =>
    set((state) => {
      const _items = [...state.items]
      const matchedItemIndex = _items.findIndex((x) => x._id === id)

      if (matchedItemIndex > -1) {
        _items.splice(matchedItemIndex, 1)
        return {items: _items}
      }
      return {items: [...state.items]}
    }),
  clearCart: () => set({items: []}),

  setShowCartCard: (flag) =>
    set((state) => {
      return {...state, showCartCard: flag}
    })
}))
