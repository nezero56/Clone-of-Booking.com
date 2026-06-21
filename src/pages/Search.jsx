import { useSearchParams } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/mockData';

function Search() {
  const [searchParams] = useSearchParams();
  const location = searchParams.get('location');
  const checkIn = searchParams.get('checkIn');
  const checkOut = searchParams.get('checkOut');
  const guests = searchParams.get('guests');

  // Mock filtering - in a real app, this would be an API call
  const filteredProperties = properties.filter(prop => {
    if (!location) return true;
    return prop.location.toLowerCase().includes(location.toLowerCase()) ||
           prop.name.toLowerCase().includes(location.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-light">
      {/* ═══ SEARCH HEADER ════════════════════════════════════════════════ */}
      <section className="bg-primary py-8 text-white">
        <div className="container-max">
          <h1 className="text-3xl font-bold mb-4">Search Results</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            {location && <div><span className="text-accent font-medium">📍 Location:</span> {location}</div>}
            {checkIn && <div><span className="text-accent font-medium">📅 Check-in:</span> {checkIn}</div>}
            {checkOut && <div><span className="text-accent font-medium">📅 Check-out:</span> {checkOut}</div>}
            {guests && <div><span className="text-accent font-medium">👥 Guests:</span> {guests}</div>}
          </div>
        </div>
      </section>

      {/* ═══ RESULTS & SIDEBAR ════════════════════════════════════════════ */}
      <section className="py-12">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* ─── FILTERS SIDEBAR ─────────────────────────────────────── */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 shadow-sm sticky top-24">
                <h2 className="text-lg font-bold text-dark mb-6">Filters</h2>

                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="font-semibold text-dark mb-3 text-sm">Price range</h3>
                  <input
                    type="range"
                    min="0"
                    max="500"
                    defaultValue="250"
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-600 mt-2">
                    <span>$0</span>
                    <span>$500+</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="mb-6">
                  <h3 className="font-semibold text-dark mb-3 text-sm">Guest rating</h3>
                  {['Exceptional', 'Very Good', 'Good', 'Satisfactory'].map((rating, idx) => (
                    <label key={idx} className="flex items-center gap-2 mb-2 cursor-pointer text-sm">
                      <input type="checkbox" className="w-4 h-4 rounded" />
                      {rating}
                    </label>
                  ))}
                </div>

                {/* Amenities */}
                <div className="mb-6">
                  <h3 className="font-semibold text-dark mb-3 text-sm">Amenities</h3>
                  {['WiFi', 'Pool', 'Restaurant', 'Spa', 'Gym', 'Parking'].map((amenity, idx) => (
                    <label key={idx} className="flex items-center gap-2 mb-2 cursor-pointer text-sm">
                      <input type="checkbox" className="w-4 h-4 rounded" />
                      {amenity}
                    </label>
                  ))}
                </div>

                {/* Reset Button */}
                <button className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-md font-medium transition-colors text-sm">
                  Reset Filters
                </button>
              </div>
            </div>

            {/* ─── RESULTS GRID ────────────────────────────────────────── */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-dark">
                  {filteredProperties.length} properties found
                </h2>
                <select className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating: High to Low</option>
                </select>
              </div>

              {filteredProperties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredProperties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg p-12 text-center">
                  <h3 className="text-lg font-semibold text-dark mb-2">No properties found</h3>
                  <p className="text-gray-600">Try adjusting your search criteria</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Search;
