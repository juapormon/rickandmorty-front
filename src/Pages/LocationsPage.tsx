import { CharacterCard } from "components/CharacterCard"
import { EpisodeCard } from "components/EpisodeCard"
import { LocationCard } from "components/LocationCard"
import { FC, Fragment, useEffect, useState } from "react"
import { useLocation } from "react-router"
import { HomeService } from "services/home.service"
import { Character } from "types/models/character.types"
import { Episode } from "types/models/episode.types"
import { Location } from "types/models/location.types"
import { Page } from "./Page"


interface AppState {
    locations: Array<Location>
}

export const LocationsPage = () => {

    const [locations, setLocations] = useState<AppState["locations"]>()

    const { pathname } = useLocation();

    useEffect(() => {
        HomeService.getLocations().then((data) =>{
            setLocations(data.results)
        })
    }, [])

    return(
        <Page apiElement={'episodes'} >
            <Fragment>
                {locations?
                    locations.map((location) =>{
                        const { name, type, residents} =
                            location;
                            return (
                                <LocationCard title={name} 
                                    type={type} residentsNumber={residents.length} />
                            )
                    })
                :
                <div>
                    <h3>loading..</h3>
                </div>
                }
            </Fragment>
        </Page>
    )
}