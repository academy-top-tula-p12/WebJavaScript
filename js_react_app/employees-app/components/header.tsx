import Link from "next/link";

interface MenuItem {
    title: string,
    href: string
}

const menuMain : MenuItem[] = [
    { title: "Home", href: "/"},
    { title: "Dashboard", href: "dashboard"},
]

function MenuItemCreate({menuItem} : { menuItem: MenuItem }){
    return (
        <li className="m-20">
            <Link href={menuItem.href}
                className="text-cyan-800 hover:text-red-700">
                {menuItem.title}
            </Link>
        </li>
    );
}

function Header(){
    return (
        <div className="">
          <div className="">
            <nav
              id="navbarCollapse"
              className="">
              <ul className="flex flex-row">
                {menuMain.map((item, index) => <MenuItemCreate menuItem={item} key={index}/>)}
              </ul>
            </nav>
          </div>
        </div>
        
    );
}

export default Header;