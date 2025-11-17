import Link from "next/link";

export default function NewArrivals() {
  const arrivals = [
    {
      title: "Nike Zoom Fly 5",
      price: "₹13,999",
      image: "/hero1.jpg",
    },
    {
      title: "Nike Air Max Pulse",
      price: "₹15,495",
      image: "/hero2.jpg",
    },
    {
      title: "Nike Invincible 3",
      price: "₹17,999",
      image: "/hero3.jpg",
    },
    {
      title: "Nike React Vision",
      price: "₹11,999",
      image: "/hero4.jpg",
    },
  ];

  // convert product title → SEO friendly slug
  const slugify = (title: string) =>
    title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");

  return (
    <section className="px-6 py-16">
      <h2 className="text-3xl font-bold mb-10">New Arrivals</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {arrivals.map((item, index) => (
          <Link key={index} href={`/product/${slugify(item.title)}`}>
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src={item.image}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-all duration-700"
                />
              </div>

              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
