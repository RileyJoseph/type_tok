import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { AiOutlineLogout } from 'react-icons/ai';
import BiSearch from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';

import Logo from '../../utils/tiktik-logo.png';

const Navbar = () => {
	 return (
			 <div className="w-full flex items-center border-b-2 justify-between
				 border-gray-200 py-2 px-4">
					<Link href="/">
					  <div className="w-[100px] md:w-[130px] md:h-[30px] h-[38px]">
								<Image 
								  className="cursor-pointer"
										src={Logo}
										alt="TikTik"
										layout="responsive"
								/>
							</div>
					</Link>
				</div>
		)
}

export default Navbar;