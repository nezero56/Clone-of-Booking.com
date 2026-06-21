# Hotel Booking Platform Clone

A modern hotel booking web application built with React, Vite, and Tailwind CSS. Inspired by Booking.com with a beautiful UI and responsive design.

## Features

- **Hero Search Section** - Search hotels by location, check-in/check-out dates, and guests
- **Property Cards** - Browse featured and searched properties with ratings and amenities
- **Advanced Search** - Filter properties by price, rating, and amenities
- **Property Details** - Comprehensive property information with gallery, reviews, and booking form
- **User Authentication** - Login and signup pages
- **Responsive Design** - Mobile-first approach, works on all screen sizes
- **Modern UI** - Clean, professional design using Tailwind CSS

## Project Structure

```
src/
├── assets/                  # Images and static files
├── components/
│   ├── Button.jsx          # Reusable button component
│   ├── Header.jsx          # Navigation header
│   ├── Footer.jsx          # Footer component
│   ├── Layout.jsx          # Main layout wrapper
│   ├── HeroSearch.jsx      # Hero search section
│   └── PropertyCard.jsx    # Property card component
├── pages/
│   ├── Home.jsx            # Landing page
│   ├── Search.jsx          # Search results page
│   ├── PropertyDetails.jsx # Individual property page
│   ├── Login.jsx           # Login page
│   ├── Signup.jsx          # Signup page
│   └── NotFound.jsx        # 404 page
├── data/
│   └── mockData.js         # Mock properties and data
├── App.jsx                 # Main app with routes
├── main.jsx                # Entry point with BrowserRouter
└── index.css               # Tailwind CSS styles
```

## Prerequisites

- Node.js v18 or higher
- npm v9 or higher

Check your versions:
```bash
node -v
npm -v
```

## Installation

1. **Navigate to the project directory:**
```bash
cd favorites-demo
```

2. **Install dependencies:**
```bash
npm install
```

## Running the Development Server

Start the dev server (opens automatically at http://localhost:5173):
```bash
npm run dev
```

## Building for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router v6** - Client-side routing
- **Tailwind CSS v3** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - Vendor prefix automation

## Color Scheme

- **Primary Blue** - `#003580` (Main brand color)
- **Secondary Blue** - `#0071C2` (Action buttons)
- **Accent Yellow** - `#FFC72C` (Highlights, CTAs)
- **Light Gray** - `#F1F5F8` (Backgrounds)
- **Dark Blue** - `#1F3A5F` (Text)

## Key Features Walkthrough

### Homepage (`/`)
- Hero search bar for finding properties
- "Why choose us" benefits section
- Browse property types
- Trending destinations showcase
- Featured accommodations
- Special deals section

### Search Page (`/search?location=...&checkIn=...&checkOut=...&guests=...`)
- Advanced filter sidebar (price, rating, amenities)
- Sortable property results
- Responsive grid layout

### Property Details (`/property/:id`)
- Full property information
- Image gallery
- Guest reviews
- Amenities list
- Booking form with price calculation
- Free cancellation policy

### Authentication Pages
- **Login** (`/login`) - Sign in to existing account
- **Signup** (`/signup`) - Create new account
- Form validation and error messages

## Component Architecture

### Reusable Components
- `Button.jsx` - Versatile button with multiple variants
- `PropertyCard.jsx` - Displays property in grid format
- `HeroSearch.jsx` - Searchable hero section

### Layout Components
- `Header.jsx` - Sticky navigation with mobile menu
- `Footer.jsx` - Multi-column footer with links
- `Layout.jsx` - Wrapper with header, outlet, footer

## Customization

### Add New Properties
Edit `src/data/mockData.js`:
```javascript
export const properties = [
  {
    id: 9,
    name: 'Your Property Name',
    location: 'City, Country',
    price: 150,
    image: 'https://...',
    rating: 4.8,
    reviews: 250,
    type: 'Hotel',
    amenities: ['WiFi', 'Pool'],
    availability: true,
  },
  // ...
];
```

### Customize Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#003580',      // Change primary color
  secondary: '#0071C2',    // Change secondary color
  accent: '#FFC72C',       // Change accent color
}
```

### Add New Pages
1. Create page file in `src/pages/`
2. Import in `src/App.jsx`
3. Add route definition in `<Routes>`

Example:
```javascript
<Route path="deals" element={<Deals />} />
```

## Deployment

### Deploy to Vercel

1. Push your project to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Vite configuration
5. Click Deploy

For React Router compatibility, create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Deploy to Netlify

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy

Create `public/_redirects`:
```
/* /index.html 200
```

## Future Enhancements

- [ ] Backend API integration
- [ ] User authentication with JWT
- [ ] Booking management system
- [ ] Payment gateway integration
- [ ] Review system with ratings
- [ ] Favorite/wishlist feature
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Multi-language support
- [ ] Dark mode theme

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

- Images use lazy loading
- Tailwind CSS is tree-shaken for production
- Build outputs are minified and optimized
- CSS is purged to remove unused styles

## Troubleshooting

### Port Already in Use
If port 5173 is busy, Vite automatically tries the next available port.

### Images Not Loading
Ensure image URLs are correct and accessible. Consider using local images in `src/assets/images/`.

### Styling Issues
- Clear node_modules: `rm -rf node_modules && npm install`
- Rebuild Tailwind cache: Delete `.next/` and rebuild

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please create an issue in the repository.

## Contributing

Contributions are welcome! Feel free to fork and submit pull requests.

---

Built with ❤️ using React, Vite, and Tailwind CSS
