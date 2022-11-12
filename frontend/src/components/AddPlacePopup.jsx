import React, { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeLink(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onAddSubmit({
      name: name,
      link: link,
    });
  }

  useEffect(() => {
    if (props.isOpen) {
      setName("");
      setLink("");
    }
  }, [props.isOpen]);

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      // onCloseClick={props.onCloseClick}
      onClose={props.onClose}
      name="add"
      form={"placeData"}
      title="Новое место"
      onSubmit={handleSubmit}
      buttonText={props.isLoading ? "Сохранение..." : "Сохранить"}
    >
      <input
        className="popup__input"
        id="place-input"
        name="name"
        type="text"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        value={name}
        onChange={handleChangeName}
        required
      />
      <span className="popup__input-error" id="place-input-error" />
      <input
        className="popup__input"
        id="place-input-link"
        name="link"
        type="url"
        placeholder="Ссылка на картинку"
        value={link}
        onChange={handleChangeLink}
        required
      />
      <span className="popup__input-error" id="place-input-link-error" />
    </PopupWithForm>
  );
}

export default AddPlacePopup;
