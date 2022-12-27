import { FC, Fragment } from "react"
import { Card } from "./generic/Card"

interface EpisodeCard {
    title: string
    episode: string
    air_date: string
}

export const EpisodeCard: FC<EpisodeCard> = ({ title, episode, air_date }) => {
    return(
        <Card title={title} >
            <Fragment>
            <div style={{ backgroundColor:"LightBlue"}} className="card">
                <div className="card-body">
                <p style={{ fontSize: "70%" }}>Episode: {episode}</p>
                </div>
                <div style={{ backgroundColor:"LightSeaGreen"}} className="card-footer">
                        <div className="col" >
                            <h5>Air date: {air_date}</h5>
                        </div>
                    </div>
            </div>
            </Fragment>
        </Card>
    )
}