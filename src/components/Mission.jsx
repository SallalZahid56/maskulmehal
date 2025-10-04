import { FaSprayCan, FaTags, FaThLarge, FaUsers } from "react-icons/fa";

export default function MissionSection() {
  const features = [
    {
      icon: <FaSprayCan className="text-5xl text-indigo-600 mb-4" />,
      title: "Premium Quality Fragrances",
      description:
        "High-quality attars and perfume impressions crafted with care for a long-lasting aroma.",
    },
    {
      icon: <FaTags className="text-5xl text-indigo-600 mb-4" />,
      title: "Affordable Luxury",
      description:
        "Enjoy elegant, long-lasting scents without compromising your budget.",
    },
    {
      icon: <FaThLarge className="text-5xl text-indigo-600 mb-4" />,
      title: "Wide Range of Options",
      description:
        "A diverse collection of fragrances to suit every mood and occasion.",
    },
    {
      icon: <FaUsers className="text-5xl text-indigo-600 mb-4" />,
      title: "Trusted by Thousands",
      description:
        "Renowned for exceptional service and a loyal customer base in Pakistan and beyond.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
          Why Choose KanzulMask?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl shadow-md hover:shadow-lg transition bg-gray-50"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
