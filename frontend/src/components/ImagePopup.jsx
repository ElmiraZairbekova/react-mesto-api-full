// Импорт библиотеки
import React from "react";

function ImagePopup(props) {
  return (
    <div
      className={`popup popup_type_view" ${props.isOpen ? 'popup_active' : ''}`} /* onClick={props.onCloseClick} */>
      <div className="popup__content">
        <img
          className="popup__image"
          src={props.card.link}
          alt={props.card.name}
        />
        <h2 className="popup__description">{props.card.name}</h2>
        <button
          className="popup__close"
          type="button"
          title="Закрыть"
          onClick={props.onClose}
        />
      </div>
      <div className="popup__overlay" onClick={props.onClose}/>
    </div>
  );
}

export default ImagePopup;
