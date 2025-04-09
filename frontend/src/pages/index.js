import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto py-12">
                <h1 className="text-5xl font-bold text-secondary">Giải pháp IT cho ý tưởng của bạn</h1>
                <p className="text-gray-600 mt-4">
                    Bạn có ý tưởng muốn phát triển? Vinhweb giúp bạn xây dựng ý tưởng từ website, app...
                </p>
                <button className="bg-primary text-white px-6 py-3 rounded mt-6 hover:bg-opacity-80">
                    Làm Website
                </button>
            </div>
            <Footer />
        </div>
    );
}