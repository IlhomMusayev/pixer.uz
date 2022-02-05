import './style.scss'
import img from '../../assets/images/project_header.png'

export default function AboutProject() {
    return(
        <div className="about__project">
            <div className="images">
                <img src={img} alt="img"/>
            </div>

            <div className="project__about">
                <div className="about__project__content container">
                    <h3>/ title</h3>
                    <p>Create appealing content to communicate the urban development and constructions that are happening in the city </p>
                </div>
            </div>
        </div>
    )
}
