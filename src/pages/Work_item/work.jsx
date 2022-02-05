import {Link } from 'react-router-dom'
import arrow from '../../assets/images/arrow.png'
import WorkHeader from '../../components/header/work_header'
import Description from '../../components/about_project/deskiription'
import AboutProject from '../../components/about_project/about_project'

export default function WorkItem() {
    return(
        <div className={"work_item"}>
            <WorkHeader />
            <Description />
            <AboutProject />
        </div>
    )
}
