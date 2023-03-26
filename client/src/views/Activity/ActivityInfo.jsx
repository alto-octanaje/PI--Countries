import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useSelector } from "react-redux";
import {
  CardsActivity,
  ContainerActivity,
} from "../../Component/Activity/Activity";
import style from "./ActivityInf.module.css";

export default function ActivityInfo({ activity }) {
  const [showInfo, setShowInfo] = useState(false);
  const seeActivities = useSelector((state) => state.seeActivities);
  const findActiviti = seeActivities.filter((c) =>
    c.activities.find((element) => element.name.toLowerCase() === activity)
  );

  let int = true;

  return (
    <article>
      <header>
        <p>
          {findActiviti.map((e) =>
            e.activities.map((i) => {
              console.log(i.name.toLowerCase() === activity);

              if (i.name.toLowerCase() === activity && int) {
                int = false;
                return (
                  <ContainerActivity
                    key={i.id}
                    name={i.name}
                    difficulty={i.difficulty}
                    duration={i.duration}
                    season={i.season}
                    id={i.id}
                  />
                );
              }
            })
          )}
        </p>

        <button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          GetCountries
        </button>
      </header>
      {showInfo && (
        <div className={style.divCardsAtivity}>
          Countries:{" "}
          {findActiviti.map((e) => {
            return (
              <CardsActivity
                key={e.id}
                id={e.id}
                name={e.name}
                image={e.image}
              />
            );
          })}
        </div>
      )}
    </article>
  );
}
