# BrewTk Portfolio - IT Services Agency

A modern, responsive portfolio website for BrewTk, specializing in IT services for small businesses, SMEs, and enterprises. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with purple accent theme
- **Responsive**: Fully responsive across all devices and screen sizes
- **Performance Optimized**: Built with Next.js 15 for optimal performance
- **SEO Optimized**: Complete SEO setup with meta tags, structured data, and sitemap
- **Interactive**: Smooth animations and hover effects
- **Contact Form**: Functional contact form with validation
- **PWA Ready**: Progressive Web App capabilities
- **Security**: Production-ready security headers and configurations

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Docker, Nginx

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- npm 8+
- Docker (for containerized deployment)

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd brewtkapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Production Deployment

### Option 1: Docker Deployment (Recommended)

1. **Build and run with Docker Compose**
   ```bash
   docker-compose up -d
   ```

2. **For production with SSL**
   ```bash
   # Create SSL directory and add your certificates
   mkdir ssl
   # Add your cert.pem and key.pem files to ssl/ directory
   docker-compose up -d
   ```

### Option 2: Vercel Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

### Option 3: Traditional Server Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# Production Environment Variables
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_APP_NAME=BrewTk Portfolio

# Contact Form Configuration
CONTACT_EMAIL=contact@your-domain.com
SMTP_HOST=your-smtp-host.com
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Security
NEXTAUTH_SECRET=your-nextauth-secret-key
NEXTAUTH_URL=https://your-domain.com

# Performance
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ENABLE_PWA=true
```

### SSL Certificate Setup

For production with HTTPS:

1. **Obtain SSL certificates** (Let's Encrypt recommended)
2. **Place certificates** in the `ssl/` directory:
   - `ssl/cert.pem` - Your SSL certificate
   - `ssl/key.pem` - Your private key

## 📊 Performance Optimization

The application includes several performance optimizations:

- **Image Optimization**: Next.js Image component with WebP/AVIF support
- **Code Splitting**: Automatic code splitting by Next.js
- **Bundle Optimization**: Webpack optimizations for production
- **Caching**: Static asset caching with Nginx
- **Compression**: Gzip compression enabled
- **CDN Ready**: Optimized for CDN deployment

## 🔒 Security Features

- **Security Headers**: Comprehensive security headers
- **Rate Limiting**: API rate limiting with Nginx
- **CSP**: Content Security Policy implementation
- **HTTPS Only**: Automatic HTTP to HTTPS redirect
- **Input Validation**: Form validation and sanitization

## 📱 PWA Features

- **Service Worker**: Offline functionality
- **App Manifest**: Installable as native app
- **Responsive Design**: Works on all devices
- **Fast Loading**: Optimized for performance

## 🧪 Testing

```bash
# Run type checking
npm run type-check

# Run linting
npm run lint

# Build for production
npm run build

# Analyze bundle size
npm run analyze
```

## 📈 Monitoring

The application includes:

- **Health Check Endpoint**: `/api/health`
- **Error Logging**: Comprehensive error handling
- **Performance Monitoring**: Built-in performance tracking
- **Uptime Monitoring**: Health check for load balancers

## 🔄 CI/CD

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run lint
      - run: npm run type-check
      # Add your deployment steps here
```

## 📞 Support

For support and questions:

- **Email**: contact@your-domain.com
- **Documentation**: [Your Documentation URL]
- **Issues**: [GitHub Issues](https://github.com/your-repo/issues)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

**BrewTk Portfolio** - Empowering businesses with innovative IT solutions.
