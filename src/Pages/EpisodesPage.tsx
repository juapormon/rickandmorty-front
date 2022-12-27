import { CharacterCard } from "components/CharacterCard"
import { EpisodeCard } from "components/EpisodeCard"
import { FC, Fragment, useEffect, useState } from "react"
import { useLocation } from "react-router"
import { HomeService } from "services/home.service"
import { Character } from "types/models/character.types"
import { Episode } from "types/models/episode.types"
import { Page } from "./Page"


interface AppState {
    episodes: Array<Episode> 
}

export const EpisodesPage = () => {

    const [episodes, setEpisodes] = useState<AppState["episodes"]>()

    const { pathname } = useLocation();

    useEffect(() => {
        HomeService.getEpisodes().then((data) =>{
            setEpisodes(data.results)
        })
    }, [])

    return(
        <>
        {console.log(episodes)}
        <Page apiElement={'episodes'} >
            <Fragment>
                {episodes?
                    episodes.map((ep) =>{
                        const { name, episode, air_date } =
                            ep;
                            return (
                                <EpisodeCard title={name} 
                                    episode={episode} air_date={air_date} />
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