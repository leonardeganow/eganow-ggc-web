import { create } from "zustand";

const useStore = create((set) => ({
  info: {
    role: "",
    cardType: "",
    cardid: "",
    amount: "",
  },

  updateRoleAndCardType: (newRole, newCardType, id, cardamount) => {
    set((state) => ({
      info: {
        ...state.info,
        role: newRole,
        cardType: newCardType,
        cardid: id,
        amount: cardamount,
      },
    }));
  },
}));

export default useStore;
