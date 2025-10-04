import { Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Musk E Ghani",
    price: 1400,
    image: "/products/musk-e-ghani.jpg",
    reviews: 1,
    rating: 5,
  },
  {
    id: 2,
    name: "Oud Abyad",
    price: 1999,
    image: "/products/oud-abyad.jpg",
    reviews: 1,
    rating: 5,
  },
  {
    id: 3,
    name: "Oud Agar",
    price: 1570,
    image: "/products/oud-agar.jpg",
    reviews: 1,
    rating: 5,
  },
  {
    id: 4,
    name: "Sultan Anfar",
    price: 1630,
    image: "/products/sultan-anfar.jpg",
    reviews: 1,
    rating: 5,
  },
];

const ProductGrid = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Best Sellers</h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col items-center text-center"
            >
              {/* Product Image */}
              <div className="w-full aspect-square overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Details */}
              <div className="mt-4">
                <h3 className="font-semibold text-lg">{product.name}</h3>

                {/* Rating */}
                <div className="flex items-center justify-center mt-1">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-green-600 fill-green-600"
                    />
                  ))}
                  <span className="text-gray-600 text-sm ml-2">
                    {product.reviews} review
                  </span>
                </div>

                <p className="mt-2 text-gray-800 font-medium">
                  From Rs.{product.price.toLocaleString()}.00 PKR
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
