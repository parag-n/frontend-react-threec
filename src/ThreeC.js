import "./ThreeC.css";
import TCnavbar from "./components/common/TCnavbar"
import TCroutes from "./components/common/TCRoutes"
import { HashRouter } from "react-router-dom";

export default function ThreeC() {

    return (
        <div className="threec">
            
            <HashRouter>

                <TCnavbar />
            
                <TCroutes />

            </HashRouter>

        </div>
    )
}