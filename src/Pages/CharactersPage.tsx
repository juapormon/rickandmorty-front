import { CharacterCard } from "components/CharacterCard"
import { FC, Fragment, useEffect, useState } from "react"
import { useLocation } from "react-router"
import { HomeService } from "services/home.service"
import { Character } from "types/models/character.types"
import { Page } from "./Page"


interface AppState {
    characters: Array<Character> 
}

export const CharactersPage = () => {

    const [characters, setCharacters] = useState<AppState["characters"]>()

    useEffect(() => {
        HomeService.getCharacters().then((data) =>{
            setCharacters(data.results)
        })
    }, [])

    return(
        <>
        {console.log(characters)}
        <Page apiElement={'characters'} >
            <Fragment>
                {characters?
                    characters.map((character) =>{
                        const { name, gender, episode, image } =
								character;
                            return (
                                <CharacterCard title={name} avatar={image} 
                                    gender={gender} popularity={episode.length} />
                            )
                        
                    })
                :
                <div>
                    <h3>loading..</h3>
                </div>
                }
                
            </Fragment>
        </Page>
        </>
    )
}