import Image from "next/image";

import Logo from "~/image/logos/logo-horizontal.png"

export default function Footer() {
    return (
        <footer className="relative py-16 pt-20">
            <div className="mx-auto w-9/12 flex justify-between align-top items-center">
                <Image src={Logo} alt="logo tecnofeal"/>
                <a href="" className="text-lg font-semibold text-white">by TSA Business Hub</a>
                <span className="text-base font-semibold text-alternative-dark-grey">TSA Business Hub. All Rights Reserved</span>
            </div>
        </footer>
    );
}