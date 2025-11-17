import Link from "next/link";

export default function Featured() {
  const items = [
    {
      title: "Men’s Running",
      image: "/hero1.jpg",
      href: "/men",
    },
    {
      title: "Women’s Training",
      image: "/hero2.jpg",
      href: "/women",
    },
    {
      title: "Kids Collection",
      image: "/hero3.jpg",
      href: "/kids",
    },
    {
      title: "New Arrivals",
      image: "/hero5.jpg",
      href: "/",
    },
  ];

  return (
    <section className="px-6 py-16">
      <h2 className="text-3xl font-bold mb-10">Featured</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <Link key={index} href={item.href}>
            <div className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg">
              
              {/* Image */}
              <img
                src={item.image}
                className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-700"
              />

              {/* Text Overlay */}
              <div className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow-lg">
                {item.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
