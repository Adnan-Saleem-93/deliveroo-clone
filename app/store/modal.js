import {create} from 'zustand'
import ClearCart from '../components/molecules/ModalContents/ClearCart'

export const useModalStore = create((set) => ({
  showModal: false,
  modalContent: null,
  setShowModal: (showModal) =>
    set((state) => {
      return {
        // ...state,
        showModal
      }
    }),
  setModalContent: (modalContent) =>
    set((state) => {
      return {
        // ...state,
        modalContent
      }
    })
}))
