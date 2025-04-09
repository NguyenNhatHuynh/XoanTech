export default function Footer() {
    return (
        <footer className="bg-secondary text-white py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-xl font-bold">VINHWEB</h3>
                    <p className="text-sm mt-3">CÔNG TY TNHH VINH WEB</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold">Quy Định</h3>
                    <ul className="mt-3 space-y-2">
                        <li><a href="#" className="text-sm hover:underline hover:text-gray-300 transition">Chính sách & quy định chung</a></li>
                        <li><a href="#" className="text-sm hover:underline hover:text-gray-300 transition">Chính sách bảo mật</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold">Link nhanh</h3>
                    <ul className="mt-3 space-y-2">
                        <li><a href="#" className="text-sm hover:underline hover:text-gray-300 transition">Thiết kế website</a></li>
                        <li><a href="#" className="text-sm hover:underline hover:text-gray-300 transition">Bằng giá làm web</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold">Liên Hệ</h3>
                    <p className="text-sm mt-3">📞 0979 788 685</p>
                    <p className="text-sm mt-1">📧 vinhnguyenhubt@gmail.com</p>
                </div>
            </div>
        </footer>
    );
}