import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

type sidebarProps = {
  isDark: Boolean;
  toggleMode: () => void;

}


const Sidebar = ({ isDark, toggleMode }: sidebarProps) => {
  return (
    <div className="sticky border-4 border-gray-400 bg-gray-300 rounded-xl w-64 p-4 m-2 shadow-2xl">

      <button className='m-1 p-2 text-2xl hover:bg-indigo-900' onClick={() => { toggleMode() }}>
        {isDark ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
      </button>
      <p className='m-1 p-2 text-2xl  hover:bg-indigo-900'>
        <FontAwesomeIcon icon={faBell} />

      </p>
      <p>Overlay Panel Content</p>
      <p>Overlay Panel Content</p>
      <p>Overlay Panel Content</p>
      <p>Overlay Panel Content</p>
      <p>Overlay Panel Content</p>
      <p>Overlay Panel Content</p>
      <p>Overlay Panel Content</p>
      <p>Overlay Panel Content</p>
      <p>Overlay Panel Content</p>
      <p>Overlay Panel Content</p>
      <p>Overlay Panel Content</p>
      <p>Overlay Panel Content</p>

    </div>
  )
}

export default Sidebar