import arrow from "../assets/icons/arrow-down.svg";
import avatar from "../assets/icons/avatar.png";
import hamburger from "../assets/icons/hamburger-menu.svg";
import logo from "../assets/icons/logo.svg";
import notification from "../assets/icons/notification.svg";
import search from "../assets/icons/search.svg";
import dots from "../assets/icons/three-dots.svg";
import "../styles/dashboard.scss";

function Dashboard() {
    return (
        <div className='dashboard-container'>
            <header>
                <div className='left'>
                    <div className='logo'>
                        <img src={logo} alt='Lendsqr logo' />
                    </div>

                    <div className='menu-btn'>
                        <img src={hamburger} alt='menu' />
                    </div>

                    <div className='search'>
                        <input
                            type='text'
                            name='search'
                            placeholder='Search for anything'
                        />

                        <button type='button'>
                            <img src={search} alt='search' />
                        </button>
                    </div>
                </div>

                <div className='right'>
                    <div className='docs'>DOCS</div>
                    <div className='notification'>
                        <img src={notification} alt='notification' />
                    </div>

                    <section>
                        <div className='user-info'>
                            <img
                                src={avatar}
                                alt='user image'
                                className='avatar'
                            />

                            <span>Adedeji</span>

                            <img
                                src={arrow}
                                alt='drop down'
                                className='drop-down'
                            />
                        </div>

                        <img src={dots} alt='open' className='dots' />
                    </section>
                    <span></span>
                </div>
            </header>
        </div>
    );
}

export default Dashboard;
