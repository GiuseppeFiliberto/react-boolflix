export default function Footer() {

    return (
        <footer className="bg-dark text-white py-4">
            <div className="container text-center">
                <p className="mb-2">&copy; {new Date().getFullYear()} Booflix. All rights reserved.</p>
                <p>
                    Follow us on:
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                        <i className="bi bi-x"></i>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                        <i className="bi bi-facebook"></i> Facebook
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                        <i className="bi bi-instagram"></i> Instagram
                    </a>
                </p>
            </div>
        </footer>
    );
};


