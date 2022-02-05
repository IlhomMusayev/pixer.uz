import './style.scss'
import {Link} from "react-router-dom";
import arrow from "../../assets/images/arrow.png";

export default function Work_header() {
    return(
        <div className="work_header">
            <div className="header">
            </div>

            <div className="container">
                <Link to={"/works"} className="btn__line">
                    <img src={arrow} alt="arrow"/>
                    <span>BACK TO WORKS</span>
                </Link>
            </div>
        </div>
    )
}
