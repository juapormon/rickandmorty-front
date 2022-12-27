import { FC, ReactElement } from "react";

export interface CardType {
    title: string,
    avatar?: string, 
    children: ReactElement
}

export const Card: FC<CardType> = ({ title, avatar, children }) =>{
     
    return (
        <div className="card">
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