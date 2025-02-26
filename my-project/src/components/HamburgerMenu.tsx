import { slide as Menu } from "react-burger-menu";

const HamburgerMenu = () => {
  return (
    <Menu
      right // Placera menyn till höger
      width={"100%"} // Bredd på menyn
      customBurgerIcon={false} // Dölj standard-hamburgerikonen
      className="bg-gray-800" // Tailwind-klass för bakgrundsfärg
    >
      {/* Menylänkar */}
      <a
        id="home"
        className="menu-item text-white hover:text-gray-400 block p-4"
        href="/"
      >
        Hem
      </a>
      <a
        id="about"
        className="menu-item text-white hover:text-gray-400 block p-4"
        href="/about"
      >
        Om oss
      </a>
      <a
        id="services"
        className="menu-item text-white hover:text-gray-400 block p-4"
        href="/services"
      >
        Tjänster
      </a>
      <a
        id="contact"
        className="menu-item text-white hover:text-gray-400 block p-4"
        href="/contact"
      >
        Kontakt
      </a>
    </Menu>
  );
};

export default HamburgerMenu;
