import React from 'react';
import './services.css';
import icon1 from '../../assets/servicesIcon/icon1.svg';
import icon2 from '../../assets/servicesIcon/icon2.svg';
import icon3 from '../../assets/servicesIcon/icon3.svg';

export default function Services() {
    const data = [
        {
            id: 1,
            icon: icon1,
            name: "Enjoy some flexibility",
            text: "Stays with flexible cancellation make it easy to re-book if your plans change."
        },
        {
            id: 2,
            icon: icon2,
            name: "Over 2 million active trips",
            text: "Choose from over 2 million active trips worldwide."
        },
        {
            id: 3,
            icon: icon3,
            name: "Discover new places",
            text: "Explore new destinations and create memorable experiences."
        }
    ];

    return (
        <div className="services">
            {data.map(item => (
                <div className="servicesCard" key={item.id}>
                    <img src={item.icon} alt="" />
                    <span>{item.name}</span>
                    <p>{item.text}</p>
                </div>
            ))}
        </div>
    );
}
