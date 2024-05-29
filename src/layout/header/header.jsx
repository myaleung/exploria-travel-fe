import Logo from "./logo";

const Header = () => {
    return <header className="d-flex justify-content-between align-items-center border-b-2 border-solid">
        <Logo />
        <p>NAV</p>
        <p>Search</p>
    </header>;
};

export default Header;
