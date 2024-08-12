import React, { useState } from "react";

const BlueHorizonLandingPage = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add logic to handle form submission and email capture
    console.log("Email submitted:", email, phone);
    setEmail("");
    setPhone("");
  };

  return (
    <div className="bg-gray-900 text-white">
      <main>
        <section className="relative">
          <div className="absolute inset-0 bg-gray-900 opacity-50 z-10"></div>

          <div className="relative z-10 py-6 px-4 sm:px-6 lg:px-8">
            <header>
              <nav className="flex items-center justify-between">
                <a href="/" className="text-2xl font-bold">
                  <img
                    src="/blue horizon white version.png"
                    alt="Blue Horizon"
                    className="h-40"
                  />
                </a>
                <a
                  href="/BH Catalog Small Scale.pdf"
                  target="_blank"
                  download
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded hidden md:inline-block uppercase"
                >
                  Download Catalog
                </a>
              </nav>
            </header>
            <div className="py-24 px-4 sm:px-6 lg:px-8 relative max-w-3xl mx-auto text-center z-10 items-center justify-center">
              <h1 className="text-4xl font-bold mb-4 uppercase">
                Welcome to Blue Horizon
              </h1>
              <p className="text-lg mb-8">
                We are a leading provider of high-quality mining equipment,
                dedicated to helping our clients maximize their productivity and
                efficiency.
              </p>
              <form
                onSubmit={handleSubmit}
                className="mb-8 flex flex-col gap-3 w-[300px] items-center mx-auto"
              >
                <input
                  type="phone"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-gray-800 text-white py-2 px-4 rounded-l focus:outline-none w-full"
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800 text-white py-2 px-4 rounded-l focus:outline-none w-full"
                />
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r uppercase w-full"
                >
                  Download Catalog
                </button>
              </form>
              <p className="text-gray-400">
                By submitting your email, you agree to our{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-hero-image bg-cover bg-center z-0"></div>
        </section>

        <section className="bg-gray-800 py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 uppercase">
              About Blue Horizon
            </h2>
            <p className="text-lg mb-8">
              Blue Horizon is a dedicated team of mining industry professionals,
              providing high-quality mining equipment and supplies by partnering
              with top wholesale companies.
            </p>
            <div>
              <img
                src="/mining-work.jpg"
                alt="About Blue Horizon"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 uppercase">
              Our Mission and Vision
            </h2>
            <p className="text-lg mb-2">
              Our mission is to be the leading intermediary in the mining
              industry, ensuring our clients receive the highest quality
              equipment and supplies to enhance their operational efficiency and
              productivity
            </p>
            <p className="text-lg mb-8">
              Our vision is To revolutionize the mining supply chain by building
              strong, lasting relationships with both our clients and suppliers.
            </p>
            <div>
              <img
                src="/tractor.jpg"
                alt="Mission and Vision"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="bg-gray-800 py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 uppercase">Meet Our Team</h2>
            <p className="text-lg mb-8">
              Blue Horizon is proud to have a team of experienced professionals
              dedicated to providing top-notch mining equipment solutions.
            </p>
            <div className="md:grid md:grid-cols-2 gap-8">
              <div className="text-center mb-4 md:mb-0">
                <img
                  src="/kieran.jpg"
                  alt="Kieran Haldenb"
                  className="rounded-md mb-4 mx-auto h-[300px] w-[300px]"
                />
                <h3 className="text-xl font-bold">Kieran Haldenby</h3>
                <p className="text-gray-400">Managing Director</p>
              </div>
              <div className="text-center">
                <img
                  src="/michael.jpeg"
                  alt="Michael Mujey"
                  className="rounded-md mb-4 mx-auto h-[300px] w-[300px]"
                />
                <h3 className="text-xl font-bold">Michael Mujey</h3>
                <p className="text-gray-400">Business developmen</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 uppercase">Contact Us</h2>
            <p className="text-lg mb-8">
              Get in touch with us for more information about our mining
              equipment solutions.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Address</h3>
                <p>112 tenth avenue Edenvale Gauteng South Africa</p>
              </div>
              {/* <div>
                <h3 className="text-xl font-bold mb-2">Social Media</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-500 hover:text-blue-600">
                    <FaFacebook size={24} />
                  </a>
                  <a href="#" className="text-blue-500 hover:text-blue-600">
                    <FaTwitter size={24} />
                  </a>
                </div>
              </div> */}
              <div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p>
                  <a
                    href="mailto:sales.bluehorizonhb@gmail.com"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    sales.bluehorizonhb@gmail.com
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p>
                  <a
                    href="tel:+27812703803"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    +27812703803
                  </a>
                  <br />
                  <a
                    href="tel:+263716480512"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    +263716480512
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Blue Horizon. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BlueHorizonLandingPage;
