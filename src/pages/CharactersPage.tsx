import { CharacterCard } from "components/CharacterCard";
import { useEffect, useState } from "react";
import { HomeService } from "services/home.service";
import { Character } from "types/models/character.types";
import { Page } from "./generic/Page";

export const CharactersPage = () => {
  const [characters, setCharacters] = useState<Array<Character>>();

  useEffect(() => {
    HomeService.getCharacters().then((data) => {
      setCharacters(data.results);
    });
  }, []);

  return (
    <Page apiElement={"characters"}>
      <>
        {characters ? (
          characters.map(({ name, gender, episode, image }) => (
            <CharacterCard
              title={name}
              avatar={image}
              gender={gender}
              popularity={episode.length}
            />
          ))
        ) : (
          <div>
            <h3>loading..</h3>
          </div>
        )}
      </>
    </Page>
  );
};
