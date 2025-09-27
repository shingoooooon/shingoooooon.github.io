# Shingo Kubomura Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Modern Tech Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Performance Optimized**: Image optimization, static generation, and SEO optimization
- **Interactive Components**: Smooth animations and transitions
- **Project Showcase**: Interactive carousel for project images
- **Social Links**: Integrated social media links with Font Awesome icons

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Font Awesome & Devicons
- **Font**: Oswald (Google Fonts)
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nextjs-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Home page
├── components/
│   ├── Banner.tsx           # Hero section component
│   ├── ProjectCard.tsx      # Individual project card
│   └── Projects.tsx         # Projects section
├── data/
│   └── projects.ts          # Project data and social links
└── types/
    └── index.ts             # TypeScript type definitions
```

## Customization

### Adding New Projects

1. Add project data to `src/data/projects.ts`
2. Ensure images are placed in `public/images/`
3. Update the `Project` interface in `src/types/index.ts` if needed

### Styling

- Global styles: `src/app/globals.css`
- Component styles: Tailwind CSS classes
- Color scheme: Custom colors defined in Tailwind config

### SEO & Metadata

Update metadata in `src/app/layout.tsx`:
- Title
- Description
- Keywords
- Open Graph tags

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

Build the project:
```bash
npm run build
```

The built files will be in the `.next` folder.

## Performance Features

- **Image Optimization**: Next.js Image component with automatic optimization
- **Static Generation**: Pre-rendered pages for better performance
- **Code Splitting**: Automatic code splitting for optimal loading
- **SEO Optimization**: Meta tags, structured data, and sitemap

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Name**: Shingo Kubomura
- **Role**: Full-Stack Developer
- **GitHub**: [@shingoooooon](https://github.com/shingoooooon)
- **LinkedIn**: [shingokubomura](https://www.linkedin.com/in/shingokubomura/)