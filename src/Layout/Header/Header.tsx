import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSun, faMoon, faShoppingCart, faBars, faClose } from '@fortawesome/free-solid-svg-icons';


type headerProps = {
  isDark: Boolean;
  toggleMode: () => void;
  isSidebar: Boolean;
  toggleSidebar: () => void;
}

function Header({ isDark, toggleMode, isSidebar, toggleSidebar }: headerProps) {
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-5xl">
        Vastrum
      </div>

      <div className="block sm:hidden">
        Mobile Nav bar
      </div>

      <div className="hidden sm:flex sm:flex-row">
        <button className='m-1 p-2 text-2xl hover:bg-indigo-900' onClick={() => { toggleMode() }}>
          {isDark ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
        </button>
        <p className='m-1 p-2 text-2xl  hover:bg-indigo-900'>
          <FontAwesomeIcon icon={faBell} />

        </p>
        <p className='m-1 p-2 text-2xl  hover:bg-indigo-900'>
          <FontAwesomeIcon icon={faShoppingCart} />
        </p>

        <button className='m-1 p-2 text-2xl hover:bg-indigo-900' onClick={() => { toggleSidebar() }}>
          {isSidebar ? <FontAwesomeIcon icon={faClose} /> : <FontAwesomeIcon icon={faBars} />}
        </button>
      </div>
    </div>
  );
}

export default Header;
