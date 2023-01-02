import { FC, useEffect, useState } from "react"
import { HomeService } from "services/home.service"
import { Card } from "./generic/Card"
import { PieChartVisualization } from "./graphComponents/PieChartVisualization"


interface CharacterCardProps {
    title: string
    avatar: string
    gender: string
    popularity: number
}

export interface CharacterEpisodeSummary {
    showUp: number
    notShowUp: number
}

export const CharacterCard: FC<CharacterCardProps> = ({ title, avatar, gender, popularity }) => {

    const [isShown, setIsShown] = useState<boolean>(false);
    const [totalEpisodes, setTotalEpisodes] = useState<number>(0);

    useEffect(() => {
        HomeService.getEpisodes().then((data) => {
            setTotalEpisodes(data.info.count)
        })
    })

    const charData: CharacterEpisodeSummary = {showUp: popularity, notShowUp: (totalEpisodes - popularity)}

    return(
        <Card title={title} avatar={avatar} >
                <div style={{ backgroundColor:"LightBlue"}} className="card">
                    <div className="card-body">
                        <p style={{ fontSize: "70%" }}>Gender: {gender}</p>
                    </div>
                    <div 
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                    style={{ backgroundColor:"LightSeaGreen"}} className="card-footer" >
                        <h5>Popularity: {Math.round(popularity * 100 / totalEpisodes)}%</h5>
                    </div>
                    {isShown && (
                        
                        <PieChartVisualization data={charData} chartWidth={150} chartHeight={200}/>
                    )}
                </div>
        </Card>
    )
}