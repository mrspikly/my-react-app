export default function Header(){
    return <>
            
    <nav>
    <div className="logo-container">
        <img src="src/assets/images/imgLogo.png" alt="Логотип сайта" className="logo"></img>
    </div>
    <ul className="nav-links">
        <li><a href="#">Продукты</a></li>
        <li><a href="#">Особенности</a></li>
        <li><a href="#">Поддержка</a></li>
    </ul>
    <button id="authButton" className="auth-button">Авторизация</button>
    </nav>
            
            <div id="modalOverlay" className="modal-overlay">
                <div className="modal-content">
                    <form className="modal-form" id="authForm">
                        <div className="form-group">
                            <label htmlFor="name">Имя:</label>
                            <input type="text" id="name" name="name" required></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required></input>
                        </div>
                        <div className="form-buttons">
                            <button type="button" className="ok-button" id="okButton">OK</button>
                            <button type="button" className="cancel-button" id="cancelButton">Отмена</button>
                        </div>
                    </form>
                </div>
            </div>
    </>
}

