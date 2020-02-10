export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = note => {
  
  return {
    type: OPEN_MODAL,
    note
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};