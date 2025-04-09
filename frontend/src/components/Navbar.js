export default function Navbar() {
    return (
        <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-secondary">VINHWEB</div>
                <div className="space-x-8">
                    <a href="/" className="text-gray-600 hover:text-primary transition">Dịch vụ</a>
                    <a href="/products" className="text-gray-600 hover:text-primary transition">Source code</a>
                    <a href="/videos" className="text-gray-600 hover:text-primary transition">Videos</a>
                    <a href="/blog" className="text-gray-600 hover:text-primary transition">Blog</a>
                    <a href="/contact" className="text-gray-600 hover:text-primary transition">Liên hệ</a>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="/auth/login" className="text-gray-600 hover:text-primary transition">Đăng nhập</a>
                    <a href="/cart" className="bg-primary text-white px-4 py-2 rounded-lg flex items-center hover:bg-opacity-80 transition">
                        <span>Giỏ hàng</span>
                        <span className="ml-2 bg-white text-primary rounded-full px-2">0</span>
                    </a>
                </div>
            </div>
        </nav>
    );
}