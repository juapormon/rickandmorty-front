import { EpisodeCard } from "components/EpisodeCard"
import { useEffect, useState } from "react"
import { HomeService } from "services/home.service"
import { Episode } from "types/models/episode.types"
import { Page } from "./generic/Page"


export const EpisodesPage = () => {

    const [episodes, setEpisodes] = useState<Array<Episode>>()

    useEffect(() => {
        HomeService.getEpisodes().then((data) =>{
            setEpisodes(data.results)
        })
    }, [])

    return(
        <Page apiElement={'episodes'} >
            <>
                {episodes?
                    episodes.map(({ name, episode, air_date }) => (    
                        <EpisodeCard title={name} 
                            episode={episode} air_date={air_date} />
                    ))
                :
                <div>
                    <h3>loading..</h3>
                </div>
                }
                
            </>
        </Page>
    )
}