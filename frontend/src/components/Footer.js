// frontend/src/components/Footer.js
export default function Footer() {
    return (
        <footer className="bg-secondary text-white py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-xl font-bold">XoanDev</h3>
                    <p className="text-sm mt-3">CÔNG TY TNHH XoanTech</p>
                    <p className="text-sm mt-2">
                        XoanTech là công ty thiết kế website chuyên nghiệp, được nhiều khách hàng tin cậy. Chúng tôi thiết kế website chuẩn SEO, chuyên đóng. App dụng năng nâng cao. Thiết kế website nhanh, chuẩn, đáp ứng nhu cầu khách hàng. Thiết kế website như HTML, CSS... Thiết kế website code tay PHP theo yêu cầu giao diện, chức năng...
                    </p>
                    <p className="text-sm mt-2">
                        GPKD: 53008018920, Cấp ngày: 12/12/2023 bởi Sở Kế Hoạch và Đầu Tư TP Biên Hòa.
                    </p>
                    <p className="text-sm mt-2">Copyright © 2023. Toàn bộ bản quyền thuộc XoanTech</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold">Quy Định</h3>
                    <ul className="mt-3 space-y-2">
                        <li><a href="#" className="text-sm hover:underline hover:text-gray-300 transition">Chính sách & quy định chung</a></li>
                        <li><a href="#" className="text-sm hover:underline hover:text-gray-300 transition">Chính sách bảo mật</a></li>
                        <li><a href="#" className="text-sm hover:underline hover:text-gray-300 transition">Chính sách bảo hành</a></li>
                        <li><a href="#" className="text-sm hover:underline hover:text-gray-300 transition">Chính sách thanh toán</a></li>
                        <li><a href="#" className="text-sm hover:underline hover:text-gray-300 transition">Chính sách giao nhận - cài đặt</a></li>
                        <li><a href="#" className="text-sm hover:underline hover:text-gray-300 transition">Quy trình làm việc</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold">Link nhanh</h3>
                    <ul className="mt-3 space-y-2">
                        <li><a href="#" className="text-sm hover:underline hover:text-gray-300 transition">Thiết kế website</a></li>
                        <li><a href="#" className="text-sm hover:underline hover:text-gray-300 transition">Mua source code</a></li>
                        <li><a href="#" className="text-sm hover:underline hover:text-gray-300 transition">Mua source code</a></li>
                        <li><a href="#" className="text-sm hover:underline hover:text-gray-300 transition">Blog</a></li>
                        <li><a href="#" className="text-sm hover:underline hover:text-gray-300 transition">Liên hệ</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold">Liên Hệ</h3>
                    <p className="text-sm mt-3">📞 0979 788 685</p>
                    <p className="text-sm mt-1">📧 xoandev163@gmail.com</p>
                    <p className="text-sm mt-1">📧 TP Biên Hòa, Đồng Nai</p>
                    <div className="flex space-x-4 mt-6">
                        <a href="#" className="text-gray-300 hover:text-primary transition">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.4 2.86 8.14 6.84 9.46.5.09.68-.22.68-.48v-1.7c-2.78.6-3.36-1.34-3.36-1.34-.46-1.16-1.12-1.47-1.12-1.47-.92-.62.07-.61.07-.61 1.02.07 1.56 1.05 1.56 1.05.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.24-.25-4.6-1.12-4.6-4.98 0-1.1.4-2 1.05-2.7-.1-.26-.46-1.3.1-2.7 0 0 .86-.28 2.8 1.04 1.62-.45 3.36-.68 5.1-.68 1.74 0 3.48.23 5.1.68 1.94-1.32 2.8-1.04 2.8-1.04.56 1.4.2 2.44.1 2.7.65.7 1.05 1.6 1.05 2.7 0 3.87-2.36 4.73-4.6 4.98.36.31.68.92.68 1.85v2.74c0 .26.18.57.68.48A9.96 9.96 0 0012 2.04z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-300 hover:text-primary transition">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.36-1.34-3.36-1.34-.46-1.16-1.12-1.47-1.12-1.47-.92-.62.07-.61.07-.61 1.02.07 1.56 1.05 1.56 1.05.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.24-.25-4.6-1.12-4.6-4.98 0-1.1.4-2 1.05-2.7-.1-.26-.46-1.3.1-2.7 0 0 .86-.28 2.8 1.04 1.62-.45 3.36-.68 5.1-.68 1.74 0 3.48.23 5.1.68 1.94-1.32 2.8-1.04 2.8-1.04.56 1.4.2 2.44.1 2.7.65.7 1.05 1.6 1.05 2.7 0 3.87-2.36 4.73-4.6 4.98.36.31.68.92.68 1.85v2.74c0 .26.18.57.68.48A9.96 9.96 0 0012 2z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-300 hover:text-primary transition">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.36-1.34-3.36-1.34-.46-1.16-1.12-1.47-1.12-1.47-.92-.62.07-.61.07-.61 1.02.07 1.56 1.05 1.56 1.05.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.24-.25-4.6-1.12-4.6-4.98 0-1.1.4-2 1.05-2.7-.1-.26-.46-1.3.1-2.7 0 0 .86-.28 2.8 1.04 1.62-.45 3.36-.68 5.1-.68 1.74 0 3.48.23 5.1.68 1.94-1.32 2.8-1.04 2.8-1.04.56 1.4.2 2.44.1 2.7.65.7 1.05 1.6 1.05 2.7 0 3.87-2.36 4.73-4.6 4.98.36.31.68.92.68 1.85v2.74c0 .26.18.57.68.48A9.96 9.96 0 0012 2z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}