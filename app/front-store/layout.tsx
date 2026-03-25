export default function FrontStoreLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/service">Service</a></li>
                </ul>
            </nav>
            {children}
        </div>
    );
}
