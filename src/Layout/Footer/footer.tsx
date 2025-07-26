import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  const nav = useNavigate();
  const load_link = (applink: string) => {
    nav(applink)
  }

  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-12 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-white text-xl font-bold mb-2">Vastrum</h2>
          <p>Elevating everyday fashion with purpose.</p>
        </div>

        {/* Shop Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Emporium</h4>
          <ul className="space-y-2">
            <li><button className="hover:text-white">New Arrivals</button></li>
            <li><button className="hover:text-white">Men</button></li>
            <li><button className="hover:text-white">Women</button></li>
            <li><button className="hover:text-white">Accessories</button></li>
            <li><button className="hover:text-white">Sale</button></li >
          </ul >
        </div >

        {/* Company Info */}
        < div >
          <h4 className="text-white font-semibold mb-3">Want to know more ? </h4>
          <ul className="space-y-2">
            <li><button className="hover:text-white">About Us</button></li>
            <li><button className="hover:text-white">Careers</button></li >
            <li><button className="hover:text-white">Sustainability</button></li >
            <li><button className="hover:text-white">Blog</button></li >
            <li><button className="hover:text-white">Contact</button></li >
          </ul >
        </div >

        {/* Newsletter & Social */}
        < div >
          <h4 className="text-white font-semibold mb-3">Stay in Touch</h4>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Subscribe
            </button>
          </form>
          <div className="flex space-x-4 m-4">
            <div className="flex gap-4">
              {/* Instagram */}
              <button
                className="flex items-center justify-center rounded-full"
                style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(to right, #FCAF45, #E1306C, #833AB4)',
                  border: 'none'
                }}
              >
                <FontAwesomeIcon icon={faInstagram} style={{ color: 'white', fontSize: '2.5rem' }} />
              </button>

              {/* Facebook */}
              <button
                className="flex items-center justify-center rounded-full"
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: 'white',
                  border: '1px solid #ddd'
                }}
              >
                <FontAwesomeIcon icon={faFacebook} style={{ color: '#1877F2', fontSize: '2.5rem' }} />
              </button>

              {/* YouTube */}
              <button
                className="flex items-center justify-center rounded-full"
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: 'white',
                  border: '1px solid #ddd'
                }}
              >
                <FontAwesomeIcon icon={faYoutube} style={{ color: '#FF0000', fontSize: '2.5rem' }} />
              </button>
            </div>

          </div >
        </div >
      </div >

      {/* Footer Bottom */}
      < div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm" >
        <p>&copy; 2025 Vastrum. All rights reserved.</p>
        <p className="mt-1">
          <button onClick={() => { load_link("/Vastrum/privacy-policy") }} className="hover:underline hover:text-white">
            Privacy Policy
          </button> |
          <button onClick={() => { load_link("/Vastrum/terms-of-use") }} className="ml-2 hover:underline hover:text-white">
            Terms of Service
          </button>
        </p>
      </div >
    </footer >
  );
};

export default Footer;
