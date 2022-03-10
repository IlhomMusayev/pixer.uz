import "./style.scss";
import Project_item from '../project_item'
import line from "../../assets/images/Line.png";
import Tingla from '../../assets/images/tingla.png'
import Nikoh from '../../assets/images/nikoh.png'
import ProjectService from '../../services/ProjectService'

import {Link} from 'react-router-dom'
import { useState, useEffect } from "react";


export default function Projects(){
    const [data, setData] = useState([])

            
    const getProjects = async (e) => {
        const projects = await ProjectService.AllPorjects()
        setData(projects?.data?.projects)
      }
  
      useEffect(() => {
        getProjects()
  
        return () => {};
      }, []);

      console.log(data);
    return(
       <div className="last__works">
            <div className={"container"}>
            <div className="title">
                <h2>Last works</h2>
            </div>
            <div className="projects">
                {
                    data.map(item => {
                        return(<Project_item name = {item.project_name} project_type={item.category.category_name} img={item.project_image} slug={item.slug}/>)
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
