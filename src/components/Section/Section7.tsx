import { Link } from "react-router-dom";

export default function Section7(){
    return <>
    <div className="rect1">
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <a className="fff">Современный дизайн</a>
        <a className="ggg">Чистые линии, смелые фактуры, актуальные формы. Наши сумки — это синтез ремесленных традиций и актуальных трендов, созданный для динамичной жизни</a>
        <Link to="*" className="www">Посмотреть ещё</Link>
        <div className="rect1">
            <img src="src/assets/images/фото10.png" className="fhoto5"></img>
            <img src="src/assets/images/фото9.png" className="fhoto5"></img>
        </div>
        <div className="fgw">                    
            <a className="fff1">Стильные решения</a>
            <a className="ggg5">Готовые акцентные элементы для вашего образа. Каждая сумка — продуманная композиция из текстур, форм и оттенков, создающая целостный стиль без усилий</a>
            <Link to="*" className="www1">Посмотреть ещё</Link>
        </div>
    </div>    
    </>}