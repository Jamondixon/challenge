import React, {useState} from 'react'
import './Challenge.scss'
import plus from '../Images/Plus.png'
import instagram from '../Images/Instagram.png'
import facebook from '../Images/Facebook.png'
import Content from '../Components/Content'

export default function Challenge(props) {

    const [readMore, setReadMore] = useState(false);
    // const moreInfo = <div className="content-container">
    //                     <h1 className="expanded-title">Explore</h1>
    //                     <hr className="gradient-line" />
    //                     <p className="expanded-content">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? </p>
    //                     <button>Read More</button>
    //                 </div>
    const hideInitialInfo = () => {
        const info = document.querySelector(".initial-container")
        info.style.display = 'none'
    }
    const showInitialInfo = () => {
        const info = document.querySelector(".initial-container")
        info.style.display = ''
    }


    const expand = () => {
        setReadMore(!readMore);
        hideInitialInfo()
    }

    return (
        <div className="challenge-container">
            <div className="initial-container">
                <div className="title-container">
                    <h1 className="text-white">Explore</h1>
                </div>
                <p className="text-white">More Details</p>
            </div>
            <div className="sidebar w-25"></div>
            <button  onClick={expand}><img src={plus} alt="plus icon" className="plus-icon"/></button>
            {readMore && <Content  showInitialInfo={showInitialInfo} />}
            <img src={facebook} alt="facebook" className="facebook-icon"/>
            <img src={instagram} alt="instagram" className="instagram-icon"/>
        </div>
    )
}
