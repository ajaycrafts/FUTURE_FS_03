import Link from "next/link";

export default function KidsPage() {
  const products = [
    {
      title: "Nike Kids Revolution",
      price: "₹4,999",
      image: "/hero1.jpg",
    },
    {
      title: "Nike Kids Star Runner",
      price: "₹3,999",
      image: "/hero2.jpg",
    },
    {
      title: "Nike Kids Flex Runner",
      price: "₹3,495",
      image: "/hero3.jpg",
    },
    {
      title: "Nike Kids Court Borough",
      price: "₹4,495",
      image: "/hero4.jpg",
    },
  ];

  // Convert product title → clean URL slug
  const slugify = (title: string) =>
    title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");

  return (
    <main className="px-6 py-10">

      {/* Banner */}
      <div className="w-full h-[40vh] rounded-2xl overflow-hidden mb-12">
        <img
          src="/hero5.jpg"
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="text-4xl font-bold mb-10">Kids Collection</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((item, index) => (
          <Link key={index} href={`/product/${slugify(item.title)}`}>
            <div className="group cursor-pointer">
              
              {/* Product Image */}
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src={item.image}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-all duration-700"
                />
              </div>

              {/* Details */}
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.price}</p>

            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
