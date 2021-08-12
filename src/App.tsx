import { useState } from 'react';
import Modal from 'react-modal';

import { Dashboard } from "./components/Deashboard";
import { Header } from "./components/Header";

import { GlobalStyle } from "./styles/global";

// Certifique-se de vincular o modal ao seu appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export function App() {
  const [isNewTranslationModalOpen, setIsNewTranslationModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTranslationModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTranslationModalOpen(false);
  }

  return (
    <>
      <Header  onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <Modal
          isOpen={isNewTranslationModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        > 
          <h2>Cadastrar transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}
