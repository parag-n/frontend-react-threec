import { BrowserRouter } from "react-router-dom";
import "./ThreeC.css";
import TCnavbar from "./components/common/TCnavbar"
import TCroutes from "./components/common/TCRoutes"

export default function ThreeC() {

    return (
        <div className="threec">
            
            <BrowserRouter>

                <TCnavbar />
            
                <TCroutes />

            </BrowserRouter>

        </div>
    )
}