import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { ArrowDown } from "lucide-react";
import Logo from "../assets/images/logo.png"

const Home = () => {
  return (
    <section id="home" className="bg-background text-white pt-5">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold mb-4">
                Next-Gen{" "}
                <span className="text-primary animate-pulse">Electronics</span>{" "}
                for
                <span className="block">Your Modern Lifestyle</span>
              </h1>
              <p className="text-gray-300">
                Explore the latest in high-performance electronics, designed to
                elevate every aspect of your life. From productivity boosters to
                entertainment enhancers, we deliver premium devices tailored for
                today’s tech-savvy user.
              </p>
            </div>

            <div className="flex space-x-4">
              <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-yellow-500">
                Shop Now
              </button>
              <button className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-black">
                Learn More
              </button>
            </div>

            <div className="social_icons flex gap-4 mt-4">
              <div className="icon">
                <a
                  href="https://www.instagram.com/aum.ktpd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-2xl hover:text-primary" />
                </a>
              </div>

              <div className="icon">
                <a
                  href="https://www.facebook.com/profile.php?id=100015293261179"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-2xl hover:text-primary" />
                </a>
              </div>

              <div className="icon">
                <a
                  href="https://github.com/Aumkitti"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-2xl hover:text-primary" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative h-[500px]">
            <img
              src={Logo}
              alt="Latest Electronics"
              className="object-contain w-full h-full animate-pulse  "
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <p className="text-white mb-2">Scroll down</p>
        <ArrowDown className="w-8 h-8 text-white animate-bounce" />
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              icon: "🚚",
              title: "Fast Delivery",
              desc: "Quick and reliable shipping to your doorstep",
            },
            {
              icon: "🎧",
              title: "Tech Support",
              desc: "24/7 expert assistance for all your queries",
            },
            {
              icon: "✨",
              title: "Premium Quality",
              desc: "Certified authentic products with warranty",
            },
            {
              icon: "💰",
              title: "Best Prices",
              desc: "Competitive prices with regular deals",
            },
          ].map((feature, index) => (
            <div key={index} className="bg-secondary p-6 rounded-lg">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home
