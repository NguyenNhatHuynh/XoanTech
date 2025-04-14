import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-secondary text-white py-4 sticky top-0 z-50">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center">
                {/* Logo */}
                <div>
                    <div className="text-xl sm:text-2xl font-bold">XoanDev</div>
                    <p className="text-xs text-gray-400">READY FOR SERVICE</p>
                </div>

                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-300 hover:text-primary transition">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>

                {/* Menu Links - Hidden on mobile, visible on md and above */}
                <div className={`md:flex md:space-x-8 ${isOpen ? 'block' : 'hidden'} absolute md:static top-16 left-0 w-full md:w-auto bg-secondary md:bg-transparent p-6 md:p-0 transition-all duration-300`}>
                    <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
                        <a href="/dich-vu" className="text-gray-300 hover:text-primary transition text-sm sm:text-base">Dịch vụ</a>
                        <a href="/source-code" className="text-gray-300 hover:text-primary transition text-sm sm:text-base">Source code</a>
                        <a href="/videos" className="text-gray-300 hover:text-primary transition text-sm sm:text-base">Videos</a>
                        <a href="/blog" className="text-gray-300 hover:text-primary transition text-sm sm:text-base">Blog</a>
                        <a href="/lien-he" className="text-gray-300 hover:text-primary transition text-sm sm:text-base">Liên Hệ</a>
                    </div>
                </div>

                {/* Right Side - Login and Cart */}
                <div className="hidden md:flex items-center space-x-4">
                    <a href="/auth/login" className="text-gray-300 hover:text-primary transition text-sm sm:text-base">Đăng nhập</a>
                    <a href="/cart" className="bg-primary text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg flex items-center hover:bg-opacity-80 transition text-sm sm:text-base">
                        <span>Giỏ hàng</span>
                        <span className="ml-2 bg-white text-primary rounded-full px-2">0</span>
                    </a>
                </div>

                {/* Mobile Login and Cart - Visible only on mobile */}
                <div className={`md:hidden flex items-center space-x-4 ${isOpen ? 'block' : 'hidden'} absolute top-28 left-0 w-full bg-secondary p-6`}>
                    <a href="/auth/login" className="text-gray-300 hover:text-primary transition text-sm">Đăng nhập</a>
                    <a href="/cart" className="bg-primary text-white px-3 py-1 rounded-lg flex items-center hover:bg-opacity-80 transition text-sm">
                        <span>Giỏ hàng</span>
                        <span className="ml-2 bg-white text-primary rounded-full px-2">0</span>
                    </a>
                </div>
            </div>
        </nav>
    );
}