import { HiArrowSmallLeft } from "react-icons/hi2";
import { FaHome } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function MenuSuperior() {
    return(
        <div className='fixed top-0 right-0 m-0'>
          <div className="flex flex-row bg-white bg-opacity-50 text-white p-5 items-center justify-center">
            <div>
              <Link href='/fuente' className="m-0 p-0 block">
                <HiArrowSmallLeft size={40} className="text-gray-900 border-2 border-gray-900 rounded-full p-1" />
              </Link>
            </div>
            <div>
              <Link href='/fuente' className="m-0 p-0 block ml-2">
                <FaHome size={43} className="text-gray-900 border-2 border-gray-900 rounded-full p-1" />
              </Link>
            </div>
            <div>
              <Link href='/' className="m-0 p-0 block ml-2">
                <FaUserCircle size={45} className="text-gray-900 border-2 border-gray-900 rounded-full p-1" />
              </Link>
            </div>
            <div>
              <Link href={`/`} className="m-0 p-0 block ml-48">
                <Image
                  src='/logo_seoc_completo.svg'
                  width='100'
                  height='100'
                  alt="seoc"
                />
              </Link>
            </div>
          </div>
        </div>
    )
}