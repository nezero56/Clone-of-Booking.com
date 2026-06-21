import { Link } from 'react-router-dom';

function PropertyCard({ property }) {
  return (
    <Link to={`/property/${property.id}`}>
      <div className="card hover:shadow-2xl">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow">
            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-lg font-semibold text-dark hover:text-primary transition-colors truncate">
                {property.name}
              </h3>
              <p className="text-sm text-gray-600">{property.location}</p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(property.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-medium text-dark">{property.rating}</span>
            <span className="text-xs text-gray-500">({property.reviews} reviews)</span>
          </div>

          {/* Amenities */}
          <div className="flex flex-wrap gap-1 mb-3">
            {property.amenities.slice(0, 2).map((amenity, idx) => (
              <span key={idx} className="text-xs bg-light text-dark px-2 py-1 rounded">
                {amenity}
              </span>
            ))}
            {property.amenities.length > 2 && (
              <span className="text-xs bg-light text-dark px-2 py-1 rounded">
                +{property.amenities.length - 2}
              </span>
            )}
          </div>

          {/* Price */}
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm text-gray-600">Price per night</p>
              <p className="text-2xl font-bold text-primary">${property.price}</p>
            </div>
            <div className="flex items-center gap-1 text-xs text-green-600 font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Available
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PropertyCard;
