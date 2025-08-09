# Dipashri Singha - Portfolio

A beautiful, minimalistic single-page portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- ✨ Modern, responsive design with smooth animations
- 🎨 Minimalistic UI with soft gradients and shadows
- 📱 Mobile-first responsive design
- 🚀 Built with Vite for fast development
- 🎭 Framer Motion animations for enhanced UX
- 🎨 Tailwind CSS for consistent styling
- ♿ Accessibility-focused with ARIA labels and semantic HTML

## Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd dipashri-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization

### Profile Image
Replace `src/assets/profile.jpg` with your professional headshot:
- Recommended size: 400x400px or larger
- Format: JPG/PNG
- Optimize for web (compress to ~100-200KB)

### Personal Information
Update the following files with your information:
- `src/components/Hero.jsx` - Hero section content
- `src/components/About.jsx` - About section
- `src/components/Experience.jsx` - Work experience
- `src/components/Education.jsx` - Education details
- `src/components/Projects.jsx` - Project examples
- `src/components/Contact.jsx` - Contact information and links

### Education Section
Replace the placeholder in `src/components/Education.jsx`:
```jsx
<h3 className="text-2xl font-bold text-neutral-900 mb-2">
  B.Tech / B.E. in Computer Science
</h3>
<p className="text-xl text-indigo-600 font-semibold mb-2">
  [Your University Name]
</p>
<p className="text-neutral-600">
  [Your Graduation Year]
</p>
```

### Contact Information
Update contact details in `src/components/Contact.jsx`:
- Email address
- LinkedIn profile URL
- Resume download link

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on push

### Manual Build

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting service

## Performance Optimization

### Images
- Use WebP format when possible
- Compress images to reduce bundle size
- Consider lazy loading for multiple images

### Bundle Size
- The current setup is optimized for minimal bundle size
- Framer Motion is tree-shakeable
- Tailwind CSS purges unused styles in production

## Accessibility

- Semantic HTML structure
- ARIA labels for navigation
- Proper heading hierarchy
- Accessible color contrast
- Keyboard navigation support

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - feel free to use this template for your own portfolio!

## Credits

- Design inspiration from modern portfolio trends
- Icons from Heroicons
- Fonts from Google Fonts
