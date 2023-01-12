import { LocationCard } from "components/LocationCard"
import { useEffect, useState } from "react"
import { HomeService } from "services/home.service"
import { Location } from "types/models/location.types"
import { Page } from "./generic/Page"


export const LocationsPage = () => {

    const [locations, setLocations] = useState<Array<Location>>()

    useEffect(() => {
        HomeService.getLocations().then((data) =>{
            setLocations(data.results)
        })
    }, [])

    return(
        <Page apiElement={'episodes'} >
            <>
                {locations?
                    locations.map(({ name, type, residents, dimension}) => (
                        <LocationCard title={name} type={type}
                            residentsNumber={residents.length} dimension={dimension} />
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