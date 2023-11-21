import { create } from "zustand";

const useStore = create((set) => ({
  info: {
    role: "",
    cardType: "",
    cardid: ""
  },

  updateRoleAndCardType: (newRole, newCardType,id) => {
    set((state) => ({
      info: {
        ...state.info,
        role: newRole,
        cardType: newCardType,
        cardid: id
      },
    }));
  },
}));

export default useStore;
