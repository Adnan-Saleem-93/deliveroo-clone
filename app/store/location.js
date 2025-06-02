import {create} from 'zustand'

export const useUserLocationStore = create((set) => ({
  latitude: null,
  longitude: null,
  address: null,
  setUserLocation: (latitude, longitude, address) => set({latitude, longitude, address}),
  clearUserLocation: () => set({latitude: null, longitude: null, address: null})
}))
