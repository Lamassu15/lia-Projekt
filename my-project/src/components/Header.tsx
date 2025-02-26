import Logo from '../assets/logo-removedbg.png'
import HamburgerMenu from './HamburgerMenu'


function Header() {
  return (
<header className="bg-primary">
  <nav className="container mx-auto px-8" aria-label="Main Navigation">
    <ul className="grid grid-cols-[1fr_auto_1fr] items-center font-bold uppercase max-lg:justify-between" role="list">
      
      {/* Vänstra navigeringslänkar */}
      <div className="flex justify-end gap-4 max-lg:hidden">
        <li role="listitem"><a href="/">Home</a></li>
        <li role="listitem"><a href="#about">About</a></li>
        <li role="listitem"><a href="index.html">Team</a></li>
      </div>

      {/* Logotyp i mitten, tar bara sin egen bredd */}
      <li className="flex justify-center list-none">
        <a href="index.html">
          <img className="w-[250px] h-[120px] object-cover" src={Logo} alt="Company Logo" />
        </a>
      </li>

      {/* Högra navigeringslänkar */}
      <div className="flex justify-start gap-4 max-lg:hidden">
        <li role="listitem"><a href="index.html">Services</a></li>
        <li role="listitem"><a href="index.html">Contact</a></li>
        <li role="listitem"><a href="index.html">Book now</a></li>
      </div>

      <div>
        <HamburgerMenu></HamburgerMenu>
      </div>
    </ul>
  </nav>
</header>

  )
}

export default Header
