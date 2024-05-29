const Footer = () => {
    return <footer className="text-center py-6 px-4 bg-primary">
        <svg class="icon">
            <use xlink:href="/assets/symbols.svg#stamp"></use>
        </svg>
        <p className="pt-3 small text-white">&copy; {(new Date().getFullYear())} DFCorp trading as Exploria. All Rights Reserved. Registered in England and Wales.</p>
    </footer>;
};

export default Footer;
