import './style.scss'
import ilhom from '../../assets/images/ilhom.jpg'

export default function DevelopersItem() {
    return(
        <>
            <div className="developers__item">
                <img src={ilhom} alt="avatar"/>
                <h4>Ilhomjon Musayev</h4>
                <p>Full stack web developer</p>
            </div>
        </>
    )
}
