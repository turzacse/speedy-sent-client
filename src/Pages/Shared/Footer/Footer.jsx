

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <aside>
                    <img className="h-[150px] w-[150px] " src="https://i.ibb.co/NN4ct8s/logo.png" alt="" />
                    <p>Spped Semd<br />Providing reliable service</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <ul>
                        <li>Food delivery</li>
                        <li>All legal Product Parces</li>
                        <li>Money Order</li>
                    </ul>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <ul>
                        <li>Fast Delivery</li>
                        <li>Trused Delivery Men</li>
                        <li>Online Tracking</li>
                    </ul>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p>Copyright © 2023 - All right reserved by Speedy Send</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;