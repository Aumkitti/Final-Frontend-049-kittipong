import { Star } from "lucide-react";

const Popular = () => {
  const products = [
    {
      name: "Smart Watch Pro",
      price: "29900 ฿",
      rating: 4.8,
      image: "/public/pic/smartwatch.png",
    },
    {
      name: "ASUS ROG Headphon",
      price: "1,880 ฿",
      rating: 4.9,
      image: "/public/pic/ROG.png",
    },
    {
      name: "4K Action Camera",
      price: "11,990฿",
      rating: 4.7,
      image: "/public/pic/4K.png",
    },
    {
      name: "HyperX Cloud III",
      price: "4,890 ฿",
      rating: 4.6,
      image: "/public/pic/hyperx.png",
    },
  ];

  return (
    <section id="popular" className="bg-background text-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Popular <span className="text-primary">Products</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-950/20 rounded-lg shadow-2xl shadow-gray-800/30"
            >
              <div className="relative h-48">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-primary text-lg">{product.price}</span>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-primary fill-current" />
                    <span className="ml-1">{product.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Popular
