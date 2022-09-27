import "./Modal.css";

export const Modal = ({ hide, title, children }) => {
  return (
    <>
      <div className="modal-overlay" />
      <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className="modal">
          <div className="modal-header">
            <button
              type="button"
              className="modal-close-button"
              data-dismiss="modal"
              aria-label="Close"
              onClick={hide}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <p>{title}</p>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};
