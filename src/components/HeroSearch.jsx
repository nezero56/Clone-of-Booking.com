import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HeroSearch() {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchData).toString();
    navigate(`/search?${params}`);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#002451] via-[#003580] to-[#0C2B5E]" />
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.15),_transparent_40%)]" />
      <div className="container-max relative py-20 xl:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.4em] text-slate-300 mb-4">BookingHub</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white mb-6">
              Find your next stay
            </h1>
            <p className="text-lg text-slate-200 max-w-xl leading-relaxed">
              Search low prices on hotels, homes and much more. Book your next trip with confidence and flexible options.
            </p>
          </div>

          <div className="rounded-[40px] bg-white p-8 shadow-2xl ring-1 ring-white/10">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">Where are you going?</h2>
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Destination</span>
                  <input
                    type="text"
                    name="location"
                    value={searchData.location}
                    onChange={handleChange}
                    placeholder="City, property, or landmark"
                    className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Check-in</span>
                  <input
                    type="date"
                    name="checkIn"
                    value={searchData.checkIn}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Check-out</span>
                  <input
                    type="date"
                    name="checkOut"
                    value={searchData.checkOut}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Guests</span>
                  <select
                    name="guests"
                    value={searchData.guests}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'adult' : 'adults'}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <button type="submit" className="w-full rounded-2xl bg-[#003580] px-6 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-[#002557]">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSearch;
