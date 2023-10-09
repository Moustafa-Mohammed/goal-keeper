import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearNotification } from "../app/features/notificationSlice";
import { useEffect } from "react";

export default function NotificationModal() {
  const dispatch = useDispatch();
  const { heading, message, type, show } = useSelector(
    (state) => state.notifications
  );

  let alertType = type === "success" ? "alert-success" : "alert-danger";
  const handleCloseModal = () => {
    dispatch(clearNotification());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(clearNotification());
    }, 3000);
    return () => clearTimeout(timer);
  }, [show]);

  const modalPortal = createPortal(
    <div
      className={`alert ${alertType} ms-auto position-fixed bottom-0 end-0`}
      style={{ maxWidth: "400px", minWidth: "300px" }}
      role="alert"
    >
      <div className="d-flex justify-content-between">
        <h4 className="alert-heading">{heading}</h4>
        <i
          className="bi bi-x-circle-fill"
          role="button"
          onClick={handleCloseModal}
        ></i>
      </div>
      <hr />
      <div className="d-flex gap-1">
        {type === "success" && <i className="bi bi-check-circle-fill"></i>}
        <p>{message}</p>
      </div>
    </div>,
    document.body
  );
  return show ? modalPortal : null;
}
