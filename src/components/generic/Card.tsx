import { FC, ReactElement } from "react";


export interface CardProps{
    title: string,
    avatar?: string, 
    children: ReactElement
}

export const Card: FC<CardProps> = ({ title, avatar, children }) =>{
     
    return (
        <div className="card col-xs-6" style={{maxWidth: "25%", maxHeight: "25%", backgroundColor: "grey"}}>
            {avatar?
                <img className="card-img-top" src={avatar} alt="Card image cap"></img>
            :
                null
            }
            <div style={{ backgroundColor:"DarkGrey"}} className="card-body">
            <h2 style={{ color:"MidnightBlue"}} className="card-title">{title}</h2>
            {children}
            </div>
        </div>
    )
}