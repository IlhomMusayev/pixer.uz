import "./style.scss";
import Project_item from '../project_item'
import line from "../../assets/images/Line.png";
import Tingla from '../../assets/images/tingla.png'
import Nikoh from '../../assets/images/nikoh.png'

import {Link} from 'react-router-dom'


export default function Projects(){

    const data = [
        {
            name: "Tingla",
            project_type: "Mobile app",
            img: Tingla,
            slug: "tingla"
        },
        {
            name: "Nikoh",
            project_type: "Web and Mobile app",
            img: Nikoh,
            slug: "nikoh"
        }
    ]


    return(
       <div className="last__works">
            <div className={"container"}>
            <div className="title">
                <h2>Last works</h2>
            </div>
            <div className="projects">
                {
                    data.map(item => {
                        return(<Project_item name = {item.name} project_type={item.project_type} img={item.img} slug={item.slug}/>)
                    })
                }
            </div>

            <Link to={'/works'} className="btn__line"><
                img src={line} alt="line"/>
                <span>SEE OUR WORK</span>
            </Link>
        </div>
       </div>
    )
}
