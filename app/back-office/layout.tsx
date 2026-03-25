export default function BackOfficeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <nav>
                <ul>
                    <li><a href="/back-office/dashboard">Dashboard</a></li>
                    <li><a href="/back-office/services">Services</a></li>
                </ul>
            </nav>
            {children}
        </div>
    );
}
