// frontend/src/pages/index.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-secondary text-white">
            <Navbar />

            {/* Hero Section */}
            <main className="flex-grow">
                <div className="container mx-auto px-4 py-16">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2">
                            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                                Giải pháp IT <span className="text-primary">cho ý tưởng</span> của bạn
                            </h1>
                            <p className="text-lg text-gray-400 mt-6 max-w-2xl">
                                Bạn có ý tưởng muốn phát triển? XoanDev giúp bạn xây dựng ý tưởng từ website, app...
                            </p>
                            <button className="mt-8 bg-primary text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-opacity-80 transition">
                                Làm Website
                            </button>
                        </div>
                        <div className="md:w-1/2 mt-8 md:mt-0">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-800 p-4 rounded-lg">
                                    <p className="text-sm text-gray-400">Tối cần tìm chuyển gia web</p>
                                </div>
                                <div className="bg-gray-800 p-4 rounded-lg">
                                    <p className="text-sm text-gray-400">Tối cần bàn MVP cho startup</p>
                                </div>
                                <div className="bg-gray-800 p-4 rounded-lg">
                                    <p className="text-sm text-gray-400">Chứng tỏ đang tìm kiếm giải pháp công nghệ</p>
                                </div>
                                <div className="bg-gray-800 p-4 rounded-lg">
                                    <p className="text-sm text-gray-400">Tối muốn phát triển web</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Source Code Section */}
            <section className="bg-white text-secondary py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center">SOURCE CODE</h2>
                    <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
                        Source code mua tại XoanDev sẽ được minh bạch try, hướng dẫn & có căn bản cập nhật thiết yếu. NextJS & Laravel là tech chính mà mình sử dụng để build lên sản phẩm. Hiện nay, công nghệ đang có đồng bộ trở rất nhiều cho hàm máy tech này. Hãy năm lấy trend, có hội để build tài tậu, làm lại những thứ đã có sẵn. Tận dụng những thứ sẵn có, không cần phải build từ đầu, làm lại những thứ đã có, đã rõ.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
                        <div className="bg-gray-100 rounded-lg p-4">
                            <img src="/images/thum1.png" alt="Source Code 1" className="w-full rounded-lg" />
                            <h3 className="text-lg font-semibold mt-4">Source code Python Crawl dữ liệu web, làm mậu</h3>
                            <p className="text-gray-600 mt-2">500,000đ <span className="line-through text-gray-400">1,000,000đ</span> <span className="text-red-500">-50%</span></p>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-4">
                            <img src="/images/thum1.png" alt="Source Code 2" className="w-full rounded-lg" />
                            <h3 className="text-lg font-semibold mt-4">Source code NextJS Fullstack Giải pháp website công ty 2...</h3>
                            <p className="text-gray-600 mt-2">6,000,000đ <span className="line-through text-gray-400">10,000,000đ</span> <span className="text-red-500">-40%</span></p>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-4">
                            <img src="/images/thum1.png" alt="Source Code 3" className="w-full rounded-lg" />
                            <h3 className="text-lg font-semibold mt-4">Laravel Cloudinary Clone API PRO - giải pháp upload...</h3>
                            <p className="text-gray-600 mt-2">1,650,000đ <span className="line-through text-gray-400">3,000,000đ</span> <span className="text-red-500">-45%</span></p>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-4">
                            <img src="/images/thum1.png" alt="Source Code 4" className="w-full rounded-lg" />
                            <h3 className="text-lg font-semibold mt-4">Laravel Cloudinary thay thế API upload...</h3>
                            <p className="text-gray-600 mt-2">1,000,000đ <span className="line-through text-gray-400">1,600,000đ</span> <span className="text-red-500">-44%</span></p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section className="bg-white text-secondary py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center">BLOG</h2>
                    <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
                        Tham khảo thêm các bài viết về lĩnh vực website, công nghệ, thủ thuật để nâng cao kiến thức cho bạn
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
                        <div className="bg-gray-100 rounded-lg p-4">
                            <img src="/images/thum1.png" alt="Blog 1" className="w-full rounded-lg" />
                            <p className="text-primary text-sm mt-4">TIN TỨC</p>
                            <h3 className="text-lg font-semibold mt-2">Mua Source Code Web để tăng tốc dự án web, tiết kiệm thời...</h3>
                            <p className="text-gray-600 mt-2">Sở hữu source code web chuyên nghiệp, để đăng ký chính mục dịch sử dụng. Xây dựng...</p>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-4">
                            <img src="/images/thum1.png" alt="Blog 2" className="w-full rounded-lg" />
                            <p className="text-primary text-sm mt-4">TIN TỨC</p>
                            <h3 className="text-lg font-semibold mt-2">Source Code Next.js Có Sẵn CMS Và Auth Cho Dự Án Web</h3>
                            <p className="text-gray-600 mt-2">Tiết kiệm thời gian phát triển web với source code Next.js có sẵn CMS và Auth. Giải pháp...</p>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-4">
                            <img src="/images/thum1.png" alt="Blog 3" className="w-full rounded-lg" />
                            <p className="text-primary text-sm mt-4">TIN TỨC</p>
                            <h3 className="text-lg font-semibold mt-2">CMS Nextjs Source Code Giải Pháp Cho Website Năng Động</h3>
                            <p className="text-gray-600 mt-2">CMS Nextjs Source code giải pháp tối ưu cho website năng động. Tiết kiệm thời gian...</p>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-4">
                            <img src="/images/thum1.png" alt="Blog 4" className="w-full rounded-lg" />
                            <p className="text-primary text-sm mt-4">HƯỚNG DẪN</p>
                            <h3 className="text-lg font-semibold mt-2">Code Python Đổi tên Files hàng loạt miễn phí - Share Code vì...</h3>
                            <p className="text-gray-600 mt-2">Đổi tên file hàng loạt để đăng ký miễn phí với 2 script PYTHON đơn giản. Thêm tiện, hiệu...</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Request Quote Section */}
            <section className="bg-gray-100 text-secondary py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2">
                            <h2 className="text-4xl font-bold">Yêu cầu Báo giá</h2>
                            <p className="text-gray-600 mt-4 max-w-xl">
                                Liên hệ ngay với Xoan Dev để nhận được tư vấn miễn phí, tư vấn giải pháp công nghệ cho bạn.
                            </p>
                            <div className="mt-6">
                                <h3 className="text-xl font-semibold">Thông tin</h3>
                                <p className="text-gray-600 mt-2">📞 0979 788 685</p>
                                <p className="text-gray-600 mt-1">📧 xoandev163@gmail.com</p>
                                <p className="text-gray-600 mt-1">📍 Phố Mới, Thành phố Lào Cai</p>
                            </div>
                            <div className="flex space-x-4 mt-6">
                                <a href="#" className="text-gray-600 hover:text-primary transition">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.4 2.86 8.14 6.84 9.46.5.09.68-.22.68-.48v-1.7c-2.78.6-3.36-1.34-3.36-1.34-.46-1.16-1.12-1.47-1.12-1.47-.92-.62.07-.61.07-.61 1.02.07 1.56 1.05 1.56 1.05.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.24-.25-4.6-1.12-4.6-4.98 0-1.1.4-2 1.05-2.7-.1-.26-.46-1.3.1-2.7 0 0 .86-.28 2.8 1.04 1.62-.45 3.36-.68 5.1-.68 1.74 0 3.48.23 5.1.68 1.94-1.32 2.8-1.04 2.8-1.04.56 1.4.2 2.44.1 2.7.65.7 1.05 1.6 1.05 2.7 0 3.87-2.36 4.73-4.6 4.98.36.31.68.92.68 1.85v2.74c0 .26.18.57.68.48A9.96 9.96 0 0012 2.04z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-600 hover:text-primary transition">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.36-1.34-3.36-1.34-.46-1.16-1.12-1.47-1.12-1.47-.92-.62.07-.61.07-.61 1.02.07 1.56 1.05 1.56 1.05.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.24-.25-4.6-1.12-4.6-4.98 0-1.1.4-2 1.05-2.7-.1-.26-.46-1.3.1-2.7 0 0 .86-.28 2.8 1.04 1.62-.45 3.36-.68 5.1-.68 1.74 0 3.48.23 5.1.68 1.94-1.32 2.8-1.04 2.8-1.04.56 1.4.2 2.44.1 2.7.65.7 1.05 1.6 1.05 2.7 0 3.87-2.36 4.73-4.6 4.98.36.31.68.92.68 1.85v2.74c0 .26.18.57.68.48A9.96 9.96 0 0012 2z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-600 hover:text-primary transition">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.36-1.34-3.36-1.34-.46-1.16-1.12-1.47-1.12-1.47-.92-.62.07-.61.07-.61 1.02.07 1.56 1.05 1.56 1.05.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.24-.25-4.6-1.12-4.6-4.98 0-1.1.4-2 1.05-2.7-.1-.26-.46-1.3.1-2.7 0 0 .86-.28 2.8 1.04 1.62-.45 3.36-.68 5.1-.68 1.74 0 3.48.23 5.1.68 1.94-1.32 2.8-1.04 2.8-1.04.56 1.4.2 2.44.1 2.7.65.7 1.05 1.6 1.05 2.7 0 3.87-2.36 4.73-4.6 4.98.36.31.68.92.68 1.85v2.74c0 .26.18.57.68.48A9.96 9.96 0 0012 2z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="md:w-1/2 mt-8 md:mt-0">
                            <form className="bg-white p-6 rounded-lg shadow-md">
                                <div className="mb-4">
                                    <label className="block text-gray-600">Tên</label>
                                    <input type="text" placeholder="Họ tên" className="w-full p-2 border rounded-lg mt-1" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-600">Email</label>
                                    <input type="email" placeholder="Email" className="w-full p-2 border rounded-lg mt-1" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-600">Số điện thoại</label>
                                    <input type="text" placeholder="Số điện thoại" className="w-full p-2 border rounded-lg mt-1" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-600">Ngành nghề</label>
                                    <select className="w-full p-2 border rounded-lg mt-1">
                                        <option>Chỉ phí bản dự định dành cho dự án</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-600">Mô tả</label>
                                    <textarea placeholder="Mô tả một chút về dự án của bạn" className="w-full p-2 border rounded-lg mt-1" rows="4"></textarea>
                                </div>
                                <button type="submit" className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-80 transition">
                                    Gửi yêu cầu
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}