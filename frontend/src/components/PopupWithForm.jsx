import React from "react";

function PopupWithForm({
  isOpen,
  onClose,
  name,
  title,
  buttonText,
  children,
  form,
  onSubmit,
}) {
  return (
    <div
      className={`popup popup_form_${name} ${isOpen ? `popup_active` : ""}`}
    >
      <div className="popup__container">
        <form className="popup__form" name={form} onSubmit={onSubmit}>
          <h2 className="popup__title">{title}</h2>
          {children}
          <button className="popup__submit" type="submit" title="Сохранить">
            {buttonText}
          </button>
        </form>
        <button
          className="popup__close"
          type="button"
          title="Закрыть"
          onClick={onClose}
        />
      </div>
      <div className="popup__overlay" onClick={onClose} />
    </div>
  );
}

export default PopupWithForm;
