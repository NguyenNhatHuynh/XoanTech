export default function ProductCard({ product }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-t-lg" />
            <h3 className="text-lg font-bold mt-2">{product.name}</h3>
            <p className="text-gray-600 text-sm">{product.description}</p>
            <div className="flex justify-between items-center mt-4">
                <span className="text-red-500 font-bold">{product.price}đ</span>
                <button className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-80">
                    Mua ngay
                </button>
            </div>
        </div>
    );
}