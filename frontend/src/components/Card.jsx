import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  // Владелец карточки или нет
  const card = props.card; // объекты карточек
  const isOwn = card.owner._id === currentUser._id;

  // Есть ли лайк
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <figure className="element">
      <img
        className="element__image"
        src={props.link}
        alt={props.name}
        title="Посмотреть в полном размере"
        onClick={handleClick}
      />
      <button
        className={`element__button-trash ${
          isOwn ? "element__button-trash_active" : ""
        }`}
        onClick={handleDeleteClick}
        type="button"
        title="Удалить фото"
      ></button>
      <figcaption className="element__info">
        <h2 className="element__title">{props.name}</h2>
        <div className="element__likes-container">
          <button
            className={`element__button-like ${
              isLiked ? "element__button-like_active" : ""
            }`}
            type="button"
            title="Нравится"
            onClick={handleLikeClick}
          ></button>
          <p className="element__likes-count">{props.likes}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default Card;
