import './style.scss'
import officeIcon from '../../assets/images/office-building 1.png'



export default function Contact() {
    return(
        <div className="container">
            <div className="contact">
                <span>
                    >
                </span>
                <div className="title">
                    <h2>Contact us</h2>
                </div>
                <div className="cards">
                    <div className="card_item">
                        <div className="office__location">
                            <h3>/ location</h3>
                            <span>Office</span>
                            <p>Toshkent shahar, Olmazor tumani, Navoiy ko’chasi, 18-uy</p>
                        </div>
                        <div className="office__icon">
                            <img src= {officeIcon} alt="office_icon"/>
                        </div>
                    </div>
                      <div className="card_item">
                        <div className="office__location">
                            <h3>/ phone number</h3>
                            <span>Office</span>
                            <p>+998 99 455 12 60</p>
                        </div>
                        <div className="office__icon">
                            <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-call-hotel-kiranshastry-lineal-kiranshastry.png"/>
                        </div>
                      </div>
                    </div>
            </div>
        </div>
    )
}
