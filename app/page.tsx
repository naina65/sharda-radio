export default function Home() {
  const products = [
    {
      name: "Ceiling Fans",
      image:
        "https://images.unsplash.com/photo-1555470100-1728256970aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2VpbGluZyUyMGZhbnN8ZW58MHx8MHx8fDA%3D"
    },
    {
        name: "Coolers",
      image:
        "https://media.istockphoto.com/id/820247780/photo/evaporative-air-cooler-fan.jpg?s=1024x1024&w=is&k=20&c=p7qC5RcMdJ3-jyXdXQuFDH5GIyerNW4QCnnom5jWwz0=",
    },
    {
      name: "Washing Machines",
      image:
        "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Refrigerators",
      image:
        "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Stabilizers",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Induction Cooktops",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "D2H Services",
      image:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <main className="bg-white text-gray-800 min-h-screen scroll-smooth">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 shadow-md sticky top-0 bg-white z-50">
        <div>
          <h1 className="text-3xl font-bold text-blue-700">
            Sharda Radio
          </h1>

          <p className="text-sm text-gray-500">
            Electronics & Home Appliances
          </p>
        </div>

        <div className="hidden md:flex gap-8 font-medium text-lg">
          <a href="#home" className="hover:text-blue-700 transition duration-300">
            Home
          </a>

          <a href="#products" className="hover:text-blue-700 transition duration-300">
            Products
          </a>

          <a href="#about" className="hover:text-blue-700 transition duration-300">
            About
          </a>

          <a href="#gallery" className="hover:text-blue-700 transition duration-300">
            Gallery
          </a>

          <a href="#contact" className="hover:text-blue-700 transition duration-300">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-center"
      >
        <img
          src="/image/img1.jpeg"
          alt="shop"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 px-4 max-w-4xl animate-pulse">
          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Welcome to Sharda Radio
          </h2>

          <p className="text-white mt-6 text-lg md:text-2xl leading-8">
            Trusted Electronics & Home Appliance Shop in Pipariya
          </p>

          <div className="flex flex-col md:flex-row gap-5 justify-center mt-10">
            <a
              href="tel:+918109062044"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition duration-300 hover:scale-105 shadow-xl"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/918109062044"
              target="_blank"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-semibold transition duration-300 hover:scale-105 shadow-xl"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-blue-700">
            Our Products
          </h2>

          <p className="text-center text-gray-600 mt-5 max-w-3xl mx-auto text-lg">
            We provide quality electronics and home appliances at affordable prices with trusted customer support.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-500"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-60 w-full object-cover"
                />

                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {product.name}
                  </h3>

                  <a
                    href={`https://wa.me/918109062044?text=Hello%20I%20want%20to%20inquire%20about%20${product.name}`}
                    target="_blank"
                    className="inline-block mt-5 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition duration-300 hover:scale-105"
                  >
                    Inquiry
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-blue-700">
            About Us
          </h2>

          <p className="mt-10 text-lg leading-9 text-gray-700">
            Sharda Radio is a trusted electronics and home appliance shop serving customers with quality products and reliable service. We offer ceiling fans, coolers, washing machines, refrigerators, stabilizers, induction cooktops, and D2H services at affordable prices.
          </p>

          <p className="mt-6 text-lg leading-9 text-gray-700">
            Our focus is to provide genuine products, quick customer support, and honest guidance to every customer. With years of local trust and customer satisfaction, Sharda Radio has become a dependable destination for home electronics and daily appliance needs.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
<section id="gallery" className="py-24 px-6 bg-gray-100">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-5xl font-bold text-center text-blue-700">
      Shop Gallery
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

      <img
        src="/image/img1.jpeg"
        alt="gallery image 1"
        className="rounded-3xl h-80 w-full object-cover hover:scale-105 transition duration-500 shadow-xl"
      />

      <img
        src="/image/img2.jpeg"
        alt="gallery image 2"
        className="rounded-3xl h-80 w-full object-cover hover:scale-105 transition duration-500 shadow-xl"
      />

    </div>
  </div>
</section>
      

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-blue-700">
            Contact Us
          </h2>

          <div className="mt-12 space-y-5 text-xl text-gray-700">
            <p>
              <span className="font-semibold">Shop Name:</span> Sharda Radio
            </p>

            <p>
              <span className="font-semibold">Phone:</span> +91 8109062044
            </p>

            <p>
              <span className="font-semibold">Email:</span>
              {' '}manishtilwani99@gmail.com
            </p>

            <p>
              <span className="font-semibold">Address:</span>
              {' '}Pipariya, Hoshangabad, Madhya Pradesh - 461775
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-5 justify-center mt-12">
            <a
              href="tel:+918109062044"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition duration-300 hover:scale-105 shadow-lg"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/918109062044"
              target="_blank"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-semibold transition duration-300 hover:scale-105 shadow-lg"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white text-center py-8">
        <p className="text-lg">
          © 2026 Sharda Radio | Electronics & Home Appliance Shop
        </p>
      </footer>
    </main>
  );

  
}

