import { FC, Fragment } from "react"
import { Card } from "../components/generic/Card"

interface PageCard {
    title: string
    avatar: string
    gender: string
    popularity: number
}

export const PageCard: FC<PageCard> = ({ title, avatar, gender, popularity }) => {
    return(
        <Card title={title} avatar={avatar} >
            <Fragment>
                <div className="card-body">
                <p style={{ fontSize: "70%" }}>Gender: {gender}</p>
                </div>
                <div className="card-footer">
                    <div className="container">
                    <div className="row">
                        <div className="col">
                        <p style={{ fontSize: "70%" }}>popularity: {popularity}%</p>
                        </div>
                    </div>
                    </div>
                </div>
            </Fragment>
        </Card>
    )
}