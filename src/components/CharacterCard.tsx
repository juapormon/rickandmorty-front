import { FC, Fragment } from "react"
import { Card } from "./generic/Card"

interface CharacterCard {
    title: string
    avatar: string
    gender: string
    popularity: number
}

export const CharacterCard: FC<CharacterCard> = ({ title, avatar, gender, popularity }) => {
    return(
        <Card title={title} avatar={avatar} >
            <Fragment>
                <div style={{ backgroundColor:"LightBlue"}}className="card">
                    <div className="card-body">
                        <p style={{ fontSize: "70%" }}>Gender: {gender}</p>
                    </div>
                    <div style={{ backgroundColor:"LightSeaGreen"}} className="card-footer" >
                        <h5>Popularity: {popularity}%</h5>
                    </div>
                </div>
            </Fragment>
        </Card>
    )
}