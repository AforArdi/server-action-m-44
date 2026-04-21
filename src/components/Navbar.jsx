import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";

const NavbarC = () => {
    return (
        <Navbar>
            <NavbarBrand>
                <Logo />
                <p className="font-bold">ACME</p>
            </NavbarBrand>
            <NavbarContent>
                <NavbarItem><Link href="#">Features</Link></NavbarItem>
                <NavbarItem><Link href="#">Pricing</Link></NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}

export default NavbarC;