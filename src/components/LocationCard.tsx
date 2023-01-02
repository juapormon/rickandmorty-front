import { FC} from "react"
import { Card } from "./generic/Card"


interface LocationCardProps {
    title: string
    type: string
    residentsNumber: number
    dimension: string
}

export const LocationCard: FC<LocationCardProps> = ({ title, type, residentsNumber, dimension }) => {
    return(
        <Card title={title} >
            <div style={{ backgroundColor:"LightBlue"}} className="card">
                <div className="card-body">
                    <p style={{ fontSize: "70%", color: "red" }}>{type}</p>
                </div>
                <div style={{ backgroundColor:"LightSeaGreen"}} className="card-footer">
                    <div className="col">
                        <h5 style={{ fontSize: "70%" }}>Residents Number </h5>
                        <h5 style={{ color: "black" }}>{residentsNumber}</h5>
                        <h5 style={{ fontSize: "70%" }}>Dimension </h5>
                        <h5 style={{ color: "black" }}>{dimension}</h5>
                    </div> 
                </div>
            </div>
        </Card>
    )
}