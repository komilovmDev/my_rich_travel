import './pl.css'
import img1 from '../../assets/plImage/img1.png'
import img2 from '../../assets/plImage/img2.png'
import img3 from '../../assets/plImage/img3.png'
import img4 from '../../assets/plImage/img4.png'
import icno1 from '../../assets/plImage/icon1.svg'
import icno2 from '../../assets/plImage/icon2.svg'

export default function Pl() {

    const data = [
        {
            id: 1,
            image: {img1} ,
            name: "Pryde land" ,
            flag: [
                {
                    image: icno1 ,
                    name: "Abuja,Nigeria"
                }
            ],
            text: "230 wants to travel here"
        },
        {
            id: 2,
            image: {img2} ,
            name: "Taj Mahal" ,
            flag: [
                {
                    image: icno2 ,
                    name: "Uttar Pradesh, India"
                }
            ],
            text: "230 wants to travel here"
        },
        {
            id: 3,
            image: {img3} ,
            name: "Taj Mahal" ,
            flag: [
                {
                    image: icno2 ,
                    name: "Uttar Pradesh, India"
                }
            ],
            text: "230 wants to travel here"
        },
        {
            id: 4,
            image: {img4} ,
            name: "Pryde land" ,
            flag: [
                {
                    image: icno1 ,
                    name: "Abuja,Nigeria"
                }
            ],
            text: "230 wants to travel here"
        }
    ]

    return (
        <div className="pl">
            <div className="plHeader">
                
            </div>
            <div className="plMain">
                <div className="plCard">
                    <span></span>
                    <div className="flag">
                        <img src="" alt="" />
                        <span></span>
                    </div>
                    <p></p>
                </div>
            </div>
        </div>
    )
}