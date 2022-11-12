import React from "react";
import Card from "./Card";
// import { api } from '../utils/api';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile">
        <div className="profile__container">
          <div
            className="profile__avatar-edit"
            type="button"
            title="Обновить аватар"
            onClick={props.onEditAvatar}
          >
            <img
              className="profile__avatar"
              alt="фото профиля"
              src={currentUser.avatar}
            />
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="редактировать профиль"
              onClick={props.onEditProfile}
            ></button>
            <p className="profile__description">{currentUser.about}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="добавить фотографию"
          onClick={props.onAddCard}
        ></button>
      </section>

      <section className="elements">
        {props.cards.map((card, id) => (
          <Card
            key={id}
            card={card}
            link={card.link}
            name={card.name}
            likes={card.likes.length}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
