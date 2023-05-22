import { pointingGentlemen } from "../data/mockData";

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
  return (
    <>
      {pointingGentlemen.map((pointingGentlemen: GentlemanInfo) => (
        <li className="gentleman" key={pointingGentlemen.id}>
          <div className="gentleman__avatar-container">
            <img
              className="gentleman__avatar"
              src={pointingGentlemen.picture}
              alt={pointingGentlemen.alternativeText}
            />
            <span className="gentleman__initial">
              {pointingGentlemen.name.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="gentleman__data-container">
            <h2 className="gentleman__name">{pointingGentlemen.name}</h2>
            <ul className="gentleman__data-list">
              <li className="gentleman__data">
                <span className="gentleman__data-label">Profession:</span>
                {pointingGentlemen.profession}
              </li>
              <li className="gentleman__data">
                <span className="gentleman__data-label">Status:</span>
                {pointingGentlemen.status}
              </li>
              <li className="gentleman__data">
                <span className="gentleman__data-label">Twitter:</span>
                {pointingGentlemen.twitter}
              </li>
            </ul>
          </div>
          <i className="icon gentleman__icon fas fa-check"></i>
          <i
            className="icon gentleman__icon gentleman__icon--delete fas fa-times"
            role="button"
          ></i>
        </li>
      ))}
    </>
  );
}
