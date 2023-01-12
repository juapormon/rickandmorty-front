import { FC, ReactElement } from "react";
import { useNavigate } from "react-router";


export interface PageProps {
    apiElement: string,
    children: ReactElement
}

export const Page: FC<PageProps> = ({ apiElement, children }) =>{

    const navigate = useNavigate();

    return (
        <div>        
            <h1>Here you have your information about the {apiElement}:</h1>
            <button style={{borderRadius:"10%", margin:'2%'}} onClick={() => navigate(-1)}>Go back</button>
            <div className="container">
                <div className="row">
                        {children}
                </div>
            </div>
        </div>
    )
}