import { useState } from "react";
import { returnPointingGentlemen } from "../data/mockData";

type GentlemanInfo = {
  id: number;
  name: string;
  status: string;
  profession: string;
  twitter: string;
  picture: string;
  alternativeText: string;
  selected: boolean;
};

export function Gentleman() {
  const gentlemanData: GentlemanInfo[] = returnPointingGentlemen();

  const [gentlemen, setGentlemen] = useState(gentlemanData);

  const gentleman = ({
    id,
    name,
    status,
    profession,
    twitter,
    picture,
    alternativeText,
    selected,
  }: GentlemanInfo) => (
    <li key={id} className="gentleman">
      <div className="gentleman__avatar-container">
        <img
          className="gentleman__avatar"
          src={picture}
          alt={alternativeText}
        />
        <span className="gentleman__initial">
          {name.charAt(0).toUpperCase()}
        </span>
      </div>
      <div className="gentleman__data-container">
        <h2 className="gentleman__name">{name}</h2>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">Profession:</span>
            {profession}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Status:</span> {status}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Twitter:</span>
            {twitter}
          </li>
        </ul>
      </div>
      <i className="icon gentleman__icon fas fa-check"></i>
      <i
        className="icon gentleman__icon gentleman__icon--delete fas fa-times"
        onClick={() => {
          setGentlemen(gentlemen.filter((item) => item.id !== id));
        }}
      ></i>
    </li>
  );

  return <>{gentlemen.map(gentleman)}</>;
}
