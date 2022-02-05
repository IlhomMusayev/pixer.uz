import './style.scss'

import DevelopersItem from "./developers_item";

export default function Team() {
    return(
        <>
           <div className="team">
               <div className="container">
                <span>
                    >
                </span>
               <div className="title">
                   <h3>Agar bizda oddiy bar bo'lsa ham, <span>biz baribir uni ushbu jamoa bilan boshqarishni tanlagan bo'lardik</span></h3>
               </div>


               <div className="developers">
                   <DevelopersItem />
                   <DevelopersItem />
                   <DevelopersItem />
                   <DevelopersItem />
                   <DevelopersItem />
                   <DevelopersItem />
                   <DevelopersItem />
                   <DevelopersItem />
                   </div>
               </div>
           </div>
        </>
    )
}
