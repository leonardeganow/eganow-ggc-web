import { create } from "zustand";

const useStore = create((set) => ({
  info: {
    role: "",
    cardType: "",
    cardid: "",
    amount: "",
    agentId: "",
    type:""
  },

  updateRoleAndCardType: (newRole, newCardType, id, cardamount,agentid,type) => {
    set((state) => ({
      info: {
        ...state.info,
        role: newRole,
        cardType: newCardType,
        cardid: id,
        amount: cardamount,
        agentId: agentid,
        type: type
      },
    }));
  },
}));

export default useStore;
