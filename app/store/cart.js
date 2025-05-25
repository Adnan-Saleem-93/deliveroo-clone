import {create} from 'zustand'

export const useCartStore = create((set) => ({
  items: [],
  addItemToCart: (newItem) => set((state) => ({items: [...state.items, newItem]})),
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
  clearCart: () => set({items: []})
}))
