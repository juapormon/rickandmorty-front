import { FC, Fragment } from "react"
import { Card } from "./generic/Card"

interface LocationCardType {
    title: string
    type: string
    residentsNumber: number
}

export const LocationCard: FC<LocationCardType> = ({ title, type, residentsNumber }) => {
    return(
        <Card title={title} >
            <Fragment>
            <div style={{ backgroundColor:"LightBlue"}} className="card">
                <div className="card-body">
                    <p style={{ fontSize: "70%" }}>Type: {type}</p>
                </div>
                <div style={{ backgroundColor:"LightSeaGreen"}} className="card-footer">
                    <div className="col">
                        <h5 style={{ fontSize: "70%" }}>Residents Number: {residentsNumber}</h5>
                    </div>
                </div>
            </div>
            </Fragment>
        </Card>
    )
}