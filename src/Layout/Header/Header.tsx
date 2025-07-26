import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSun, faMoon, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';


type headerProps = {
  isDark: Boolean;
  toggleMode: () => void;
}

function Header({ isDark, toggleMode }: headerProps) {
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-5xl">
        Vastrum
      </div>
      <div className="flex flex-row">
        <button className='m-1 p-2 text-2xl hover:bg-indigo-900' onClick={() => { toggleMode() }}>
          {isDark ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
        </button>
        <p className='m-1 p-2 text-2xl  hover:bg-indigo-900'>
          <FontAwesomeIcon icon={faBell} />

        </p>
        <p className='m-1 p-2 text-2xl  hover:bg-indigo-900'>
          <FontAwesomeIcon icon={faShoppingCart} />
        </p>
        <p className='m-1 p-2 text-2xl  hover:bg-indigo-900'>
          <FontAwesomeIcon icon={faBars} />
        </p>

      </div>
    </div>
  );
}

export default Header;
