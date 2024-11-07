import about from "../assets/images/about.png"
import join from "../assets/images/join.png"

const About = () =>{
  return (
    <section id="about" className="bg-background text-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          About <span className="text-primary">Us</span>
        </h2>

        <div>
          <div className="Leading grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <img
                src={about}
                alt="Innovation"
                className="object-contain w-full h-full animate-pulse"
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-3xl font-bold">
                Leading the{" "}
                <span className="text-primary animate-pulse">digital</span>{" "}
                revolution
              </h3>
              <p className="text-gray-300">
                We bring you the latest in technology, from smartphones to smart
                home devices. Our commitment to quality and innovation drives
                everything we do.
              </p>
            </div>
          </div>

          <div className="join grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-3 md:order-1">
              <h3 className="text-3xl font-bold">
                Join our tech{" "}
                <span className="text-primary animate-pulse">community</span>
              </h3>
              <p className="text-gray-300">
                Be part of a growing community of tech enthusiasts. Stay updated
                with the latest trends and innovations in the world of
                electronics.
              </p>
            </div>
            <div className="relative h-[400px] md:order-2">
              <img
                src={join}
                alt="Community"
                className="object-contain w-full h-full animate-pulse"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About
