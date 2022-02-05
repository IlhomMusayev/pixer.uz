import "./style.scss";
import line from '../../assets/images/Line.png'

import {Link} from 'react-router-dom'

export default function Header(){

    return(
        <header className={"container"}>
            <div className="content">
                <span className="icon">
                    >
                </span>

                <div className="content__text">
                    <h2>We are a <span>digital</span><br/>
                        creative studio</h2>
                </div>

                <button className="btn"><
                    img src={line} alt="line"/>
                    <span>SEE OUR WORK</span>
                </button>
            </div>
        </header>
    )
}
