import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faShoppingCart, faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';


type headerProps = {
  isSidebar: Boolean;
  toggleSidebar: () => void;
  toggleNotifications: () => void;
}

const Header = ({ isSidebar, toggleSidebar, toggleNotifications }: headerProps) => {
  const nav = useNavigate()
  const load_app = (applink: string) => {
    nav(applink)
  }

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const currentScrollY = window.scrollY;
      currentScrollY > 200 ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });

    toggleVisibility();
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);


  return (
    <div className={`${isVisible ? 'block' : 'hidden'} bg-black/60  text-white p-4 w-full flex justify-between items-center shadow-2xl rounded-b-2xl transition-opacity duration-100`}>
      <div className={`flex justify-center items-center`} onClick={() => { load_app('/Vastrum/') }}>
        <p className='text-5xl font-bold text-black' style={{ fontFamily: '"Samarkan Normal V2", cursive' }}> Vastrum</p>
      </div>

      <div>
        <div className="block sm:hidden">
          Mobile Nav bar
        </div>

        <div className="hidden sm:flex sm:flex-row">
          <p className='m-1 p-2 text-2xl  hover:bg-indigo-900'>
            <FontAwesomeIcon icon={faShoppingCart} onClick={() => { }} />
          </p>
          <button className='m-1 p-2 text-2xl hover:bg-indigo-900' onClick={() => { toggleNotifications() }}>
            <FontAwesomeIcon icon={faBell} />
          </button>
          <button className='m-1 p-2 text-2xl hover:bg-indigo-900' onClick={() => { toggleSidebar() }}>
            {isSidebar ? <FontAwesomeIcon icon={faClose} /> : <FontAwesomeIcon icon={faBars} />}
          </button>

        </div>
      </div>
    </div>
  );
}

export default Header;
