import "./style.scss";
// import Tingla from '../../assets/images/tingla.png'

import {Link} from 'react-router-dom'

export default function Project_item({name, project_type, img, slug, style}){
    return(
        <>
            <div className="project__item" style={{style}}>
                <Link to = {"/works/"+slug}>
                    <div className="project__item__img">
                        <img src={img} alt="project__image"/>
                    </div>

                    <div className="project__item__content">
                        <h2>{name}</h2>
                        <span>
                            | {project_type}
                        </span>
                    </div>
                </Link>
            </div>
        </>
    )
}
