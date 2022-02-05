import './style.scss'


export default function Deskiription() {
    return(
        <div className="description container">
            <div className="name">
                <h3>Tingla</h3>
            </div>

            <div className="description__content">
                <ul className="desciption__list">
                    <li className="desciption__list__item">
                        <ul className="list__item">
                            <li>
                                <h4>/ about</h4>
                                <p>The City’s Ministry of Transport was in need of a frash face regarding content in social media</p>
                            </li>
                        </ul>
                    </li>
                    <li className="desciption__list__item">
                        <ul className="list__item">
                            <li>
                                <h4>/ team</h4>
                                <p>Pixer.uz</p>
                            </li>
                        </ul>
                    </li>
                    <li className="desciption__list__item">
                        <ul className="list__item">
                            <li>
                                <h4>/ technologys</h4>
                                <p>Concept, UX/UI design, Visual design, Strategy</p>
                            </li>
                        </ul>
                    </li>
                    <li className="desciption__list__item">
                        <ul className="list__item">
                            <li>
                                <h4>/ learn more</h4>
                                <p>
                                    <a href="tingla.uz">View website</a>
                                </p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}
