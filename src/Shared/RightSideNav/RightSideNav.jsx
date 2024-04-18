import { FaFacebook, FaGithub, FaGoogle, FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 mb-6'>
                <h2 className="text-3xl mb-6 font-medium">Login With</h2>
                <button className="btn btn-outline w-full mb-4">
                <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline w-full">
                <FaGithub></FaGithub>
                    Login with GitHub
                </button>
            </div>
            <div className='p-4'>
                <h2 className="text-3xl mb-6 font-medium">Find Us</h2>

                <a className='p-2 flex gap-4 items-center text-lg border rounded-t-lg' href="/">
                    <FaFacebook className='text-4xl'></FaFacebook> <span>Facebook</span>
                </a>
                <a className='p-2 flex gap-4 items-center text-lg border-x' href="/">
                    <FaTwitter className='text-4xl'></FaTwitter> <span>Twitter</span>
                </a>
                <a className='p-2 flex gap-4 items-center text-lg border rounded-b-lg' href="/">
                    <FaInstagram className='text-4xl'></FaInstagram> <span>Instagram</span>
                </a>
            </div>
            <div className='p-4'>
                <h2 className="text-3xl mb-6 font-medium">Q Zone</h2>

                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;