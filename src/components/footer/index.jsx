import "./style.scss"
import { Link } from 'react-router-dom'
import instagram_logo from '../../assets/images/instagram.png'
import telegram_logo from '../../assets/images/telegram.png'
import youtube_logo from '../../assets/images/youtube.png'


export default function Footer (){
    return(
        <div className={"container"}>
            <footer>
                    <ul className="footer__list">
                        <li className="list__item">
                            <Link to="/contacts">Contact Us</Link>
                        </li>
                    </ul>

                    <ul className="social__networks">
                        <li className="list__item">
                            <a href="https://instagram.com/pixer.uz" target="_blank">
                                <img src={instagram_logo} alt="instagram icon"/>
                            </a>
                        </li>
                        <li className="list__item">
                            <a href="https://t.me/pixer_uz" target="_blank">
                                <img src={telegram_logo} alt="telegram icon"/>
                            </a>
                        </li>
                        <li className="list__item">
                            <a href="https://youtube.com/pixer_uz" target="_blank">
                                <img src={youtube_logo} alt="youtube icon"/>
                            </a>
                        </li>
                    </ul>
            </footer>
        </div>
    )
}
