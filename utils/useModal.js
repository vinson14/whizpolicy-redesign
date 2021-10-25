import { useState } from "react";

const useModal = (initialState = false) => {
  const [modalState, setModalState] = useState(initialState);
  const openModal = () => setModalState(true);
  const closeModal = () => setModalState(false);

  return [modalState, openModal, closeModal];
};

export default useModal;
