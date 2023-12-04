import { create } from "zustand";

const useStore = create((set) => ({
  info: {
    role: "",
    cardType: "",
    cardid: "",
    amount: "",
    agentId: "",
  },

  updateRoleAndCardType: (newRole, newCardType, id, cardamount,agentid) => {
    set((state) => ({
      info: {
        ...state.info,
        role: newRole,
        cardType: newCardType,
        cardid: id,
        amount: cardamount,
        agentId: agentid
      },
    }));
  },
}));

export default useStore;
