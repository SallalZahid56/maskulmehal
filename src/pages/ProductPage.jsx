import { useState } from "react";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);

  const product = {
    title: "Black & Silver Oud | Concentrated Perfume | Attar Oil",
    reviews: 82,
    size: "12ml",
    oldPrice: 2200,
    newPrice: 1900,
    images: [
      "/images/black-silver-1.jpg",
      "/images/black-silver-2.jpg",
      "/images/black-silver-3.jpg",
    ],
    description: `Black & Silver Oud is the latest update to the classic Black & Silver fragrance. 
    It features a rich mix of woody, leathery, sweet, and amber notes with a hint of saffron, giving it a bold, distinctive scent.`,
  };

  const [activeImage, setActiveImage] = useState(product.images[0]);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Product Images */}
        <div>
          <img
            src={activeImage}
            alt={product.title}
            className="w-full rounded-xl shadow-md mb-4"
          />
          <div className="flex gap-4">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="thumbnail"
                onClick={() => setActiveImage(img)}
                className={`w-20 h-20 rounded-md cursor-pointer border ${
                  activeImage === img ? "border-indigo-600" : "border-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right: Product Details */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">
            {product.title}
          </h1>
          <p className="text-yellow-500 mb-2">★★★★★ {product.reviews} Reviews</p>
          <p className="text-sm text-red-500 mb-4">King Of The Series 🔥</p>

          {/* Size */}
          <div className="mb-4">
            <span className="font-semibold">Size:</span>
            <span className="ml-2 border px-3 py-1 rounded-md">{product.size}</span>
          </div>

          {/* Price */}
          <div className="mb-4">
            <span className="line-through text-gray-500 mr-2">
              Rs.{product.oldPrice.toLocaleString()}
            </span>
            <span className="text-red-600 font-bold text-2xl">
              Rs.{product.newPrice.toLocaleString()}
            </span>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-6">
            <span className="font-semibold">Quantity:</span>
            <div className="flex items-center border rounded-md">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-1 text-xl font-bold"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-1 text-xl font-bold"
              >
                +
              </button>
            </div>
          </div>

          {/* Features */}
          <ul className="text-gray-600 mb-6 space-y-2">
            <li>✔️ 7 Days Easy Return & Exchange</li>
            <li>✔️ 500,000+ Happy Customers</li>
            <li>✔️ Celebrities Most Loved Brand</li>
          </ul>

          {/* Buttons */}
          <div className="flex gap-4 mb-8">
            <button className="flex-1 bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 transition">
              Add to cart
            </button>
            <button className="flex-1 bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition">
              Buy it now
            </button>
          </div>
        </div>
      </div>

      {/* Frequently Bought Items */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <h2 className="text-xl font-bold mb-6">Frequently Bought Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border rounded-lg p-4 shadow hover:shadow-lg">
              <img
                src={`/images/freq-${item}.jpg`}
                alt="frequently bought"
                className="w-full h-48 object-cover rounded-md mb-3"
              />
              <h3 className="font-semibold text-gray-800 mb-1">
                Product {item}
              </h3>
              <p className="text-red-600 font-bold">Rs.{1500 + item * 200}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs Section */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="border-b mb-6 flex gap-6">
          {["Description", "Performance", "Shipping", "Unboxing Video"].map(
            (tab, index) => (
              <button
                key={index}
                className="pb-2 font-semibold text-gray-700 hover:text-indigo-600"
              >
                {tab}
              </button>
            )
          )}
        </div>
        <p className="text-gray-600">{product.description}</p>
      </div>
    </section>
  );
}
