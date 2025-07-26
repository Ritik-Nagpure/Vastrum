import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

type headerProps = {
  isSidebar: Boolean;
  toggleSidebar: () => void;
}

const Header = ({ isSidebar, toggleSidebar }: headerProps) => {
  const nav = useNavigate()
  const load_app = (applink: string) => {
    nav(applink)
  }

  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-5xl" onClick={() => { load_app('/Vastrum/') }}>
        Vastrum
      </div>

      <div className="block sm:hidden">
        Mobile Nav bar
      </div>

      <div className="hidden sm:flex sm:flex-row">


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
