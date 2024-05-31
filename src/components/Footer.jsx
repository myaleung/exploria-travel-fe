const Footer = () => {
    return <footer className="bg-secondary">
        <div className="container py-6 text-center">
            <div className="row">
                <div className="col">
                    <svg class="icon">
                        <use xlink:href="/assets/symbols.svg#stamp"></use>
                    </svg>
                    <p className="pt-3 small text-white">&copy; {(new Date().getFullYear())} DFCorp trading as Exploria. All Rights Reserved. Registered in England and Wales.</p>
                </div>
            </div>
        </div>
    </footer>;
};

export default Footer;
