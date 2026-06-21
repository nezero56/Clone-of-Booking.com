import PropertyCard from '../components/PropertyCard';
import HeroSearch from '../components/HeroSearch';
import { properties, trendingDestinations, propertyTypes, offers } from '../data/mockData';

const benefits = [
  {
    icon: '🏨',
    title: 'Book now, pay at the property',
    description: 'FREE cancellation on most rooms so you can book with confidence.',
  },
  {
    icon: '🧑‍🤝‍🧑',
    title: '300M+ reviews from fellow travelers',
    description: 'Get trusted information from guests like you.',
  },
  {
    icon: '🌍',
    title: '2+ million properties worldwide',
    description: 'Hotels, guest houses, apartments, and more.',
  },
  {
    icon: '💬',
    title: 'Trusted customer service',
    description: 'We’re always here to help, 24/7.',
  },
];

function Home() {
  return (
    <div className="bg-[#0C2B5E] text-white">
      <HeroSearch />

      <section className="bg-white text-gray-900 py-12">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {benefits.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-900 shadow-sm">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F7FA] py-16">
        <div className="container-max">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {offers.map((offer) => (
              <div key={offer.id} className="rounded-3xl overflow-hidden bg-white shadow-lg">
                <img src={offer.image} alt={offer.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">{offer.title}</h3>
                  <p className="text-sm text-slate-600">Save on stays with special offers and curated deals.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-max">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-slate-500 mb-3">Browse by property type</p>
            <h2 className="text-4xl font-bold text-slate-900">Browse by property type</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {propertyTypes.map((type) => (
              <div key={type.id} className="rounded-3xl overflow-hidden shadow-lg group bg-white">
                <img src={type.image} alt={type.name} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{type.name}</h3>
                  <p className="text-sm text-slate-600">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F7FA] py-16">
        <div className="container-max">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-slate-500 mb-3">Trending destinations</p>
            <h2 className="text-4xl font-bold text-slate-900">Discover trending destinations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trendingDestinations.map((destination) => (
              <div key={destination.id} className="relative overflow-hidden rounded-3xl shadow-lg">
                <img src={destination.image} alt={destination.name} className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-xs uppercase tracking-[0.35em] mb-1">Popular destination</p>
                  <h3 className="text-3xl font-bold">{destination.name}</h3>
                  <p className="text-sm text-slate-200 mt-2">{destination.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-max">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-slate-500 mb-3">Stay at our top unique properties</p>
            <h2 className="text-4xl font-bold text-slate-900">Stay at our top unique properties</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {properties.slice(0, 4).map((property) => (
              <div key={property.id} className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm">
                <img src={property.image} alt={property.name} className="w-full h-64 object-cover" />
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase tracking-[0.35em] text-slate-500">{property.type}</span>
                    <div className="rounded-full bg-white p-2 shadow-sm">
                      <span className="text-xl">♥</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{property.name}</h3>
                  <p className="text-sm text-slate-600 mb-4">{property.location}</p>
                  <div className="flex items-center justify-between text-sm text-slate-700">
                    <span>{property.rating} ★</span>
                    <span className="font-semibold">from ${property.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F7FA] py-16">
        <div className="container-max">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-slate-500 mb-3">Deals for the weekend</p>
            <h2 className="text-4xl font-bold text-slate-900">Deals for the weekend</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {properties.slice(0, 4).map((property) => (
              <div key={property.id} className="rounded-3xl overflow-hidden bg-white shadow-lg">
                <img src={property.image} alt={property.name} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <p className="text-sm text-slate-500 mb-2">{property.type}</p>
                  <h3 className="text-xl font-semibold mb-4">{property.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 text-sm">2 nights from</span>
                    <span className="font-semibold">US${property.price + 40}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-max">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-slate-500 mb-3">Homes guests love</p>
            <h2 className="text-4xl font-bold text-slate-900">Homes guests love</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {properties.slice(0, 4).map((property) => (
              <div key={property.id} className="rounded-3xl overflow-hidden bg-white shadow-lg">
                <img src={property.image} alt={property.name} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{property.name}</h3>
                  <p className="text-sm text-slate-500 mb-3">{property.location}</p>
                  <div className="flex items-center justify-between text-sm text-slate-700">
                    <span>{property.rating} ★</span>
                    <span className="font-semibold">from US${property.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
