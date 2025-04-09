import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <div className="container mx-auto px-4 py-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-secondary leading-tight">
                        Giải pháp IT cho ý tưởng của bạn
                    </h1>
                    <p className="text-lg text-gray-600 mt-6 max-w-2xl">
                        Bạn có ý tưởng muốn phát triển? Vinhweb giúp bạn xây dựng ý tưởng từ website, app...
                    </p>
                    <button className="mt-8 bg-primary text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-opacity-80 transition">
                        Làm Website
                    </button>
                </div>
            </main>
            <Footer />
        </div>
    );
}