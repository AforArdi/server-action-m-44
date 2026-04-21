import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

const NavbarC = () => {
    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="flex h-16 items-center justify-between px-6">
                <div className="flex items-center gap-3">
                    <p className="font-bold">Company Name</p>
                </div>
                <ul className="flex items-center gap-4">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/users">Users</Link></li>
                </ul>
                <div>
                    <ThemeSwitch></ThemeSwitch>
                </div>
            </header>
        </nav>
    );
}

export default NavbarC;