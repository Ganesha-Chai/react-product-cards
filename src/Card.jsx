import Price from "./Price";

import "./Card.css";

export default function Card({idx}){
    let title = [
    "Logitech MX Master",
    "Apple Pencil (2nd Gen)",
    "Zebronics Zeb-transformer",
    "Petronics Toad 23"
    ];

    let description = [
        ["8,000 DPI", "5 Programmable buttons"],
        ["intuitive surface", "designed for iPad Pro"],
        ["designed for iPad Pro", "intuitive surface"],
        ["wireless", "optical orientation"]
    ];

    let oldPrice = [
        12495,
        11900,
        1599,
        599
    ];

    let newPrice = [
        8999,
        9199,
        899,
        278
    ];
    return(
        <div className="Card">
            <h4>{title[idx]}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price old={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    );
}