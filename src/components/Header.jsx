function Header() {
    return (
        <header>
            <logo>
                <img src="../public/images/emotions.png" alt="logo" className="logo"/>
            </logo>
            <h1>Learn with Emojis</h1>
            <nav>
                <a href="">
                    <i className="fa fa-home fs-1"></i>
                    <span>Home</span>
                </a>
                <a href="">
                    <i className="fas fa-gamepad"></i>
                    <span>Game</span>
                </a>
                <a href="">
                    <i className="fas fa-tshirt"></i>
                    <span></span>
                </a>
                <a href="">
                    <i className="fas fa-utensils"></i>
                    <span></span>
                </a>
                <a href="">
                    <i className="fas fa-dove"></i>
                    <span></span>
                </a>
                <a href="">
                    <i className="fas fa-cube"></i>
                    <span></span>
                </a>
            </nav>

        </header>
    );
}

export default Header;
