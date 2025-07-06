import { Link } from "react-router-dom";

export default function Section2(){
    return <>
<div className="foot">
  <img src="src/assets/images/imgLogo.png" alt="Footer Logo" className="logo2" />
  
  <div className="menu">
    <ul className="nav-links1">
        <li><Link to="*">Продукты</Link></li>
        <li><Link to="*">Особенности</Link></li>
        <li><Link to="*">Поддержка</Link></li>
    </ul>
    
    <p className="posl">
      Подпишитесь на стильные новости: анонсы коллекций,<br /> 
      секреты ухода и эксклюзивные предложения.<br />
      <Link to="*"><button className="but1">Sign Up</button><br /></Link>
      <button className="but2">United States (English)</button>
    </p>
  </div>
  </div>
</>
}