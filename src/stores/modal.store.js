import { create } from 'zustand';

export const useModalStore = create((set) => ({
  isOpen: false,
  message: '',
  openModal: (message) => set({ isOpen: true, message }),
  closeModal: () => set({ isOpen: false, message: '' }),
}));
