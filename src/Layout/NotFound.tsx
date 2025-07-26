import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faBan } from '@fortawesome/free-solid-svg-icons';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import notfound from '/notfound.jpg';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center  p-3 sm:p-4 object-contain">
            <img
                src={notfound}
                alt="Image not found"
                className="w-full max-w-[300px] h-auto object-cover"
            />

            <p className="text-lg sm:text-xl font-bold p-2 text-center">
                <span className="fa-stack fa-md">
                    <FontAwesomeIcon icon={faGear as IconProp} className="fa-stack-1x" />
                    <FontAwesomeIcon icon={faBan as IconProp} className="fa-stack-2x" style={{ color: 'red' }} />
                </span>
                Oh No !!!! ...... It's not you, it's me.<br />
                My server is going through a really bad phase. Please visit later.
            </p>
        </div>

    )
}

export default NotFound