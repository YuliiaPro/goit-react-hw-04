import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#modal");

export default function ImageModal({
  image: {
    alt_description,
    urls: { full },
  },
  modalIsOpen,
  closeModal,
}) {
  return (
    <Modal
      isOpen={modalIsOpen}
      shouldCloseOnEsc={true}
      onRequestClose={closeModal}
      className={css.modal}
      contentLabel={alt_description}
      overlayClassName={css.overlay}
    >
      <img src={full} alt={alt_description} />
    </Modal>
  );
}
