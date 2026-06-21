import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { properties } from '../data/mockData';

function BookingForm({ property }) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [confirm, setConfirm] = useState(null);

  const calculateNights = (ci, co) => {
    const d1 = new Date(ci);
    const d2 = new Date(co);
    const diff = Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  };

  const handleReserve = () => {
    if (!checkIn || !checkOut) {
      alert('Please select check-in and check-out dates');
      return;
    }
    if (new Date(checkOut) <= new Date(checkIn)) {
      alert('Check-out must be after check-in');
      return;
    }
    const nights = calculateNights(checkIn, checkOut);
    if (nights <= 0) {
      alert('Select valid dates');
      return;
    }
    const subtotal = property.price * nights;
    const taxes = +(subtotal * 0.15).toFixed(2);
    const total = +(subtotal + taxes).toFixed(2);
    const booking = {
      id: Date.now(),
      propertyId: property.id,
      propertyName: property.name,
      checkIn,
      checkOut,
      guests,
      nights,
      subtotal,
      taxes,
      total,
      createdAt: new Date().toISOString(),
    };
    const existing = JSON.parse(localStorage.getItem('bookings') || '[]');
    existing.push(booking);
    localStorage.setItem('bookings', JSON.stringify(existing));
    setConfirm(booking);
  };

  return (
    <>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-sm font-medium text-dark mb-1">Check-in</label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-dark mb-1">Check-out</label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-dark mb-1">Guests</label>
          <select
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'Guest' : 'Guests'}
              </option>
            ))}
          </select>
        </div>
        <div className="bg-light rounded-md p-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Nights</span>
            <span className="text-dark font-medium">{calculateNights(checkIn, checkOut) || 0}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Taxes & fees</span>
            <span className="text-dark font-medium">
              ${((property.price * (calculateNights(checkIn, checkOut) || 0)) * 0.15).toFixed(2)}
            </span>
          </div>
          <div className="border-t border-gray-300 pt-2 flex justify-between">
            <span className="font-bold text-dark">Estimated Total</span>
            <span className="text-lg font-bold text-primary">
              ${((property.price * (calculateNights(checkIn, checkOut) || 0)) * 1.15).toFixed(2)}
            </span>
          </div>
        </div>
        <button
          type="button"
          onClick={handleReserve}
          className="w-full btn-primary text-lg font-bold hover:shadow-lg transition-all"
        >
          Reserve Now
        </button>
      </form>

      {confirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setConfirm(null)} />
          <div className="relative bg-white rounded-lg shadow-lg max-w-md w-full p-6 z-10">
            <h3 className="text-xl font-bold mb-3">Booking Confirmed</h3>
            <p className="text-gray-700 mb-2">{confirm.propertyName}</p>
            <p className="text-gray-600 text-sm">
              {confirm.checkIn} → {confirm.checkOut} • {confirm.nights} nights
            </p>
            <div className="mt-4 border-t pt-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Subtotal</span>
                <span className="font-medium">${confirm.subtotal}</span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Taxes</span>
                <span className="font-medium">${confirm.taxes}</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="text-primary">${confirm.total}</span>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <button onClick={() => setConfirm(null)} className="flex-1 btn-secondary">
                Close
              </button>
              <button
                onClick={() => { setConfirm(null); window.location.href = '/'; }}
                className="flex-1 btn-primary"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-dark mb-4">404</h1>
          <p className="text-gray-600 mb-8">Property not found</p>
          <button onClick={() => navigate('/')} className="btn-primary">
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light">
      {/* BREADCRUMB */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="container-max py-4">
          <button
            onClick={() => navigate(-1)}
            className="text-primary hover:text-secondary flex items-center gap-2 font-medium"
          >
            ← Back
          </button>
        </div>
      </div>

      {/* PROPERTY HEADER */}
      <section className="bg-white">
        <div className="container-max py-8">
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-2">{property.location}</p>
            <h1 className="text-4xl font-bold text-dark mb-4">{property.name}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(property.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-lg font-semibold text-dark">{property.rating}</span>
              <span className="text-gray-600">({property.reviews} reviews)</span>
            </div>
          </div>

          {/* GALLERY */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-2 lg:row-span-2">
              <img src={property.image} alt={property.name} className="w-full h-96 object-cover rounded-lg" />
            </div>
            {[...Array(3)].map((_, i) => (
              <img
                key={i}
                src={property.image}
                alt={`Gallery ${i + 2}`}
                className="w-full h-44 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="container-max py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* MAIN CONTENT */}
          <div className="lg:col-span-2">
            <section className="bg-white rounded-lg p-6 mb-8 shadow-sm">
              <h2 className="text-2xl font-bold text-dark mb-4">About this place</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Experience luxury and comfort in this stunning {property.type.toLowerCase()} located in{' '}
                {property.location}. With world-class amenities and exceptional service, this is the perfect
                destination for your stay.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Enjoy modern furnishings, high-speed WiFi, and access to all nearby attractions. Our dedicated
                staff is here to ensure your stay is unforgettable.
              </p>
            </section>

            <section className="bg-white rounded-lg p-6 mb-8 shadow-sm">
              <h2 className="text-2xl font-bold text-dark mb-6">Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {property.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700 font-medium">{amenity}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-dark mb-6">Guest Reviews</h2>
              <div className="space-y-6">
                {[1, 2, 3].map((idx) => (
                  <div key={idx} className="border-b border-gray-200 pb-6 last:border-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-semibold text-dark">Guest {idx}</p>
                        <div className="flex items-center gap-2">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">2 days ago</span>
                    </div>
                    <p className="text-gray-700">Amazing stay! The property is beautiful and the location is perfect.</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* BOOKING SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="mb-6">
                <div className="text-sm text-gray-600 mb-1">Price per night</div>
                <h3 className="text-3xl font-bold text-primary mb-2">${property.price}</h3>
                <p className="text-xs text-gray-500">+ taxes and fees</p>
              </div>
              <BookingForm property={property} />
              <div className="mt-6 pt-6 border-t border-gray-200 space-y-2 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 flex-shrink-0 text-primary mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Free cancellation until 48 hours before check-in</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 flex-shrink-0 text-primary mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Best price guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;
