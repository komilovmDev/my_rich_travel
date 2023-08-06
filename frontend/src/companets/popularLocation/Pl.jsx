import './pl.css'
import img1 from '../../assets/plImage/img1.png'
import img2 from '../../assets/plImage/img2.png'
import img3 from '../../assets/plImage/img3.png'
import img4 from '../../assets/plImage/img4.png'
import icno1 from '../../assets/plImage/flag1.svg'
import icno2 from '../../assets/plImage/flag2.svg'

export default function Pl() {

    const data = [
        {
            id: 1,
            image: img1 ,
            name: "Pryde land",
            Flagimage: icno1,
            Flagname: "Abuja,Nigeria",
            text: "230 wants to travel here"
        },
        {
            id: 2,
            image:  img2 ,
            name: "Taj Mahal",
            Flagimage: icno2,
            Flagname: "Abuja,Nigeria",
            text: "230 wants to travel here"
        },
        {
            id: 3,
            image: img3 ,
            name: "Taj Mahal",
            Flagimage: icno1,
            Flagname: "Abuja,Nigeria",
            text: "230 wants to travel here"
        },
        {
            id: 4,
            image: img4 ,
            name: "Pryde land",
            Flagimage: icno2,
            Flagname: "Abuja,Nigeria",
            text: "230 wants to travel here"
        }
    ]

    return (
        <div className="pl">
            <div className="plHeader">
                <h5>Where do you want to go</h5>
                <h2>Popular Destinations</h2>
            </div>
            <div className="plMain">
                {
                    data.map(item => (
                        <div className="plCard" style={{ backgroundImage: `url(${item.image})` }} >
                            <span>{item.name}</span>
                            <div className="flag">
                                <img src={item.Flagimage} alt="" />
                                <span>{item.Flagname}</span>
                            </div>
                            <p>{item.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}