import style from "./Activity.module.css";

const ContainerActivity = ({ id, name, difficulty, duration, season }) => {
  return (
    <div>
      <h2>activity {id}</h2>
      <h2>{name}</h2>
      <p>Difficulty: {difficulty}</p>
      <p>Duration: {duration} </p>
      <p>Season: {season}</p>
    </div>
  );
};

const CardsActivity = ({ name, image }) => {
  return (
    <div className={style.theCardsActivity}>
      <h2>{name}</h2>
      <img src={image} alt={name} className={style.imageActivity} />
    </div>
  );
};
export { CardsActivity, ContainerActivity };
