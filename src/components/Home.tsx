import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { HomeService } from "services/home.service"

interface ApiOptions {
    characters: string
    episodes: string
    locations: string
}

interface AppState {
    urls: ApiOptions
}

const Home = () => {

    const navigate = useNavigate();

    const [urls, setUrls] = useState<AppState["urls"]>()

    useEffect(() => {
        HomeService.getApiURLs().then((data) =>{
            setUrls(data)
        })
    },[])


    const getElementCard = (apiElement: string, cardText: string, cardColor: string) => {
       
        return(
        <div className="col">
            <a onClick={() => navigate('/' + apiElement)}>
            <div className={`card ${cardColor}`}>
                <div className="card-body text-center">
                <p className="card-text">{cardText}</p>
                </div>
            </div>
            </a>
        </div>
        )
    }

    return (
        <>
        {console.log(urls)}

        <div>
            <h1>Hello friend, Would you like to see some Rick and Morty information?</h1><br/>
            {urls?
                <div className="container">
                    <p>We have information about the following elements:</p>
                    <div className="row row-cols-3 g-3">
                        {getElementCard("characters", "Characters", "bg-primary")}
                        {getElementCard("locations", "Locations", "bg-warning")}
                        {getElementCard("episodes", "Episodes", "bg-success")}
                    </div>
                </div>
            :
                <h3>loading...</h3>
            }
            
        </div>
        </>
    ) 
}

export default Home