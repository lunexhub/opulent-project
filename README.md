# Plush Polish Interiors

A modern, responsive website for Plush Polish Interiors - showcasing interior design services, gallery, and contact information.

## Features

- 🎨 Modern, responsive design
- 🖼️ Image gallery showcasing interior design work
- 📱 Mobile-friendly navigation
- ⚡ Fast performance with Vite
- 🎯 Built with TypeScript for type safety

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm or bun

### Installation

1. Clone the repository:
```sh
git clone <YOUR_GIT_URL>
cd plush-polish-interiors-main
```

2. Install dependencies:
```sh
npm install
# or
bun install
```

3. (Optional) Configure environment variables:
   - See `ENV_VARIABLES.md` for all available configuration options
   - Create a `.env` file in the root directory to customize settings
   - If not provided, defaults will be used from `src/lib/config.ts`

4. Start the development server:
```sh
npm run dev
# or
bun dev
```

The application will be available at `http://localhost:8080` (or the port specified in `VITE_SERVER_PORT`)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## Technologies

This project is built with:

- **Vite** - Next generation frontend tooling
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **shadcn-ui** - High-quality component library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

## Configuration

This project uses a centralized configuration system to avoid hardcoded values:

- **`src/lib/config.ts`** - Central configuration file that reads from environment variables
- **`ENV_VARIABLES.md`** - Documentation of all available environment variables
- **`.env`** - Create this file to override default values (not tracked in git)

All configuration values can be customized via environment variables. See `ENV_VARIABLES.md` for details.

## Project Structure

```
├── public/          # Static assets
├── src/
│   ├── assets/     # Images and media files
│   ├── components/ # React components
│   │   └── ui/     # shadcn-ui components
│   ├── hooks/      # Custom React hooks
│   ├── lib/        # Utility functions and configuration
│   ├── pages/      # Page components
│   └── test/       # Test files
├── index.html      # Entry HTML file
├── vite.config.ts  # Vite configuration
└── ENV_VARIABLES.md # Environment variables documentation
```

## Deployment

### Vercel Deployment

This project is pre-configured for **Vercel** deployment:

1. **Push to GitHub:**
   ```sh
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect the Vite configuration

3. **Configure Environment Variables:**
   - In Vercel dashboard, go to Project Settings → Environment Variables
   - Add all variables from `ENV_VARIABLES.md` (or `.env.example` if available)
   - Variables must be prefixed with `VITE_`
   - Redeploy after adding variables

4. **Deploy:**
   - Vercel will automatically deploy on every push to `main`
   - Or trigger a manual deployment from the dashboard

### Other Platforms

This project can also be deployed to:

- **Netlify** - Similar setup, add environment variables in Netlify dashboard
- **GitHub Pages** - Requires additional configuration for SPA routing
- **Any static hosting service** - Build and upload the `dist` folder

### Building for Production

To build locally:
```sh
npm run build
```

The `dist` folder will contain the production-ready files.

**Important:** Make sure to set all environment variables in your hosting platform's dashboard before deploying.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.
