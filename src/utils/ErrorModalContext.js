import React, { createContext, useContext, useState } from 'react';

const ErrorModalContext = createContext();

export const ErrorModalProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showErrorModal = (errorMessage) => {
    setError(errorMessage);
    setIsModalOpen(true);
  };

  const hideErrorModal = () => {
    setError(null);
    setIsModalOpen(false);
  };

  return (
    <ErrorModalContext.Provider value={{ error, isModalOpen, showErrorModal, hideErrorModal }}>
      {children}
    </ErrorModalContext.Provider>
  );
};

export const useErrorModal = () => useContext(ErrorModalContext);
