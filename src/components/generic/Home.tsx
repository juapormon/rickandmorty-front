import { FC, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { HomeService } from "services/home.service"


type ApiType = 'characters' | 'episodes' | 'locations'

interface ElementCardProps {
    type: ApiType
    cardText: string
    cardColor: string
}

const ElementCard : FC<ElementCardProps> = ({type, cardText, cardColor}) => {
    
    const navigate = useNavigate();

    return(
    <div className="col">
        <div className={`card ${cardColor} custom-button`} onClick={() => navigate(`/${type}`)} role="button">
            <div className="card-body text-center">
            <p className="card-text">{cardText}</p>
            </div>
        </div>
    </div>
    )
}

const Home = () => {

    const [urls, setUrls] = useState<Array<string>>()

    useEffect(() => {
        HomeService.getApiURLs().then((data) =>{
            setUrls(data)
        })
    },[])

    return (
        <div>
            <h1>Hello friend, Would you like to see some Rick and Morty information?</h1><br/>
            {urls?
                <div className="container">
                    <p>We have information about the following elements:</p>
                    <div className="row row-cols-3 g-3">
                        <ElementCard type={"characters"} cardText={"Characters"} cardColor={"bg-primary"} />
                        <ElementCard type={"locations"} cardText={"Locations"} cardColor={"bg-warning"} />
                        <ElementCard type={"episodes"} cardText={"Episodes"} cardColor={"bg-success"} />
                    </div>
                </div>
            :
                <h3>loading...</h3>
            }
            
        </div>
    ) 
}

export default Home