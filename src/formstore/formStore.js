import { create } from "zustand";

const useStore = create((set) => ({
  info: {
    role: "",
    cardType: "",
  },

  updateRoleAndCardType: (newRole, newCardType) => {
    set((state) => ({
      info: {
        ...state.info,
        role: newRole,
        cardType: newCardType,
      },
    }));
  },
}));

export default useStore;
