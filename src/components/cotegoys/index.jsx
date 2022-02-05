import './style.scss'
import {Link} from 'react-router-dom'
import Project_item from '../project_item'

import Tingla from '../../assets/images/tingla.png'
import Nikoh from '../../assets/images/nikoh.png'



export default function Cotegoys() {
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
        },
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
        },
        {
            name: "Tingla",
            project_type: "Mobile app",
            img: Tingla,
            slug: "tingla"
        },
    ]

    return(
        <div className={"container"}>
            <ul className="cotegorys">
                <li className='category__item'>
                    <Link to={"/all"} className={"active"}>All</Link>
                </li>
                <span>/</span>
                <li className='category__item'>
                    <Link to={"/all"} className={""}>Web site</Link>
                </li>
                <span>/</span>
                <li className='category__item'>
                    <Link to={"/all"} className={""}>Mobile apps</Link>
                </li>
                <span>/</span>
                <li className='category__item'>
                    <Link to={"/all"} className={""}>CRM</Link>
                </li>
                <span>/</span>
                <li className='category__item'>
                    <Link to={"/all"} className={""}>Telegram bot</Link>
                </li>
            </ul>


            <div className="works">
                {
                    data.map(item => {
                        return(<Project_item name = {item.name} project_type={item.project_type} img={item.img} slug={item.slug}/>)
                    })
                }
            </div>
        </div>
    )
}
