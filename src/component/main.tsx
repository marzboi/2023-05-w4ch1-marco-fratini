import { Gentleman } from "./gentleman";

export function Main() {
  return (
    <main className="main">
      <ul className="gentlemen"></ul>
      <Gentleman
        name="Bertin Osborne"
        status="Alive"
        profession="Youtuber"
        twitter="@osbourne"
        picture="bertin.jpg"
        alternativeText="Alex"
      ></Gentleman>
    </main>
  );
}
