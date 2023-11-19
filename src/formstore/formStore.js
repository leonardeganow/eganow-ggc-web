import { create } from "zustand";

const useStore = create((set) => ({
  releaseBtn: false,
  //   increasePopulation: () => set((state) => ({ formData: state.formData + 1 })),
  //   removeAllBears: () => set({ formData: {} }),
  onChange: (newFormData) => {
    console.log(newFormData);
    set({ formData: newFormData });
    console.log("Form data changed:", newFormData);

    // You can perform additional actions or validation here
  },

  updateFormData: (fieldName, newValue) => {
    set((state) => {
      const updatedFormData = { ...state.formData, [fieldName]: newValue };
      console.log("Updated Form Data:", updatedFormData);
      return { formData: updatedFormData };
    });
    // You can perform additional actions or validation here
  },
}));

export default useStore;
