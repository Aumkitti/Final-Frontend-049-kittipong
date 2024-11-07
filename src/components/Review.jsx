import { Star, User, Mail, Send } from "lucide-react";

const Review = () => {
  const reviews = [
    {
      name: "kittipong",
      review:
        "Amazing products and excellent customer service! Will definitely buy again.",
      rating: 5,
    },
    {
      name: "Tossaphon",
      review:
        "The tech support team was incredibly helpful. Great experience overall!",
      rating: 5,
    },
    {
      name: "Titadach",
      review: "Fast delivery and product quality exceeded my expectations.",
      rating: 4,
    },
  ];

  return (
    <section id="review" className="bg-background text-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Customer <span className="text-primary">Reviews</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, index) => (
            <div key={index} className="bg-secondary p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 mr-4 flex items-center justify-center bg-gray-700 rounded-full">
                  <User className="w-8 h-8 text-gray-300" />
                </div>
                <div>
                  <h3 className="font-bold">{review.name}</h3>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-primary fill-current"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300">{review.review}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4 text-center bg-gray-800 rounded-lg py-4">
          <h3 className="text-xl font-bold">Subscribe</h3>
          <p className="text-gray-300">
            Subscribe for updates and exclusive offers
          </p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-96 py-2 bg-gray-700 rounded-l-lg focus:outline-none"
            />
            <div className="bg-primary text-black px-4 py-2 rounded-r-lg hover:bg-yellow-500">
              <Mail className="w-5 h-5" />
            </div>
            <div className=" rounded-lg bg-gray-900 px-4 ml-3 hover:bg-gray-950 ">
              <button className="mt-2 1/2 flex items-center space-x-2">
                Subscribe <Send className="w-5 h-5 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Review