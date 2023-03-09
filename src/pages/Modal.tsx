import { useState } from "react";
import style from "./Modal.module.scss";

const Modal = (props: { theme: string }) => {
  const [showingModal, setShowingModal] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalContent, setModalContent] = useState<string>("");
  const [mode, setMode] = useState<number>(1);
  const [removeCount, setRemoveCount] = useState<number>(1);
  const [deleteCount, setDeleteCount] = useState<number>(1);
  const [deleteDisabled, setDeleteDisabled] = useState<boolean>(false);

  const handleCTA = (e: any) => {
    setModalTitle("Information");
    setModalContent(`You have clicked the ${e.target.innerHTML} button`);
    setMode(1);
    setShowingModal(true);
  };

  const handleRemove = (e: any) => {
    setModalTitle("Remove?");
    setModalContent(
      `Are you sure you want to remove the ${e.target.innerHTML} button?`
    );
    setMode(2);
    setShowingModal(true);
  };

  const handleRemoveClicked = () => {
    setShowingModal(false);
    setRemoveCount(removeCount + 1);
  };

  const handleDelete = (e: any) => {
    setDeleteCount(deleteCount + 1);
    setModalTitle("Delete?");
    setModalContent(
      `Are you sure you want to delete the ${e.target.innerHTML} button? This cannot be undone!`
    );
    setMode(3);
    setShowingModal(true);
  };

  const handleDeleteClicked = () => {
    setShowingModal(false);
    setDeleteDisabled(!deleteDisabled);
  };

  return (
    <div className={`${style.main} left`}>
      <button onClick={(e) => handleCTA(e)}>Single CTA</button>
      <button onClick={(e) => handleRemove(e)}>Remove {removeCount}</button>
      <button onClick={(e) => handleDelete(e)}>
        {deleteDisabled ? "Disabled" : "Delete"} {deleteCount}
      </button>
      {showingModal && (
        <div className={style.modalBg}>
          <div className={style.modal}>
            <div className={style.header}>
              <h2>{modalTitle}</h2>
            </div>
            <div className={style.body}>
              <p>{modalContent}</p>
            </div>
            <div className={style.footer}>
              {mode === 1 && (
                <button
                  className={style.btnOK}
                  onClick={() => setShowingModal(false)}
                >
                  OK
                </button>
              )}
              {mode === 2 && (
                <>
                  <button
                    className={style.btnCancel}
                    onClick={() => setShowingModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className={style.btnRemove}
                    onClick={() => handleRemoveClicked()}
                  >
                    Remove
                  </button>
                </>
              )}
              {mode === 3 && (
                <>
                  <button
                    className={style.btnCancel}
                    onClick={() => setShowingModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className={style.btnDelete}
                    onClick={() => handleDeleteClicked()}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
