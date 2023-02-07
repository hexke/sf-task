import Dropdown from './dropdown';
import classes from './navigation.module.css';

const Navigation = () => {
    return (
        <>
            <input className={classes.navigationToggle} type="checkbox" id="navigation-toggle" hidden />
            <label htmlFor='navigation-toggle'>
                <span></span>
                <span></span>
                <span></span>
            </label>
            <nav className={classes.navigation}>
                <a href="#">Nowości</a>
                <Dropdown className={classes.dropdown} title="Produkty" inputId="dropdown-01">
                    <ul>
                        <li>
                            <a href="#">Suszarki</a>
                        </li>
                        <li>
                            <a href="#">Lokówki</a>
                        </li>
                        <li>
                            <a href="#">Kosmetyki</a>
                        </li>
                    </ul>
                </Dropdown>
                <a href="#">Trendy</a>
                <a href="#">O firmie</a>
                <a href="#">Salony</a>
                <a href="#">Dystrybutorzy</a>
                <a href="#">Kontakt</a>
            </nav>
        </>
    );
}

export default Navigation;