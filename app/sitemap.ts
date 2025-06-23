import { MetadataRoute } from 'next'

// Replace with your actual domain
const baseUrl = 'https://malidigitalagency.com'

export default function sitemap(): MetadataRoute.Sitemap {
  // Get the current date for lastModified
  const currentDate = new Date()
  
  // Define all the routes in your application
  const routes = [
    // Main pages
    '',
    '/about-us',
    '/contact-us',
    '/book-consultation',
    '/our-work',
    '/blog',
    
    // Services pages
    '/our-services',
    '/our-services/content-production',
    '/our-services/digital-marketing',
    '/our-services/digital-sales-%26-leads',
    '/our-services/digital-skills-training',
    '/our-services/media-buying',
    '/our-services/social-media-management',
    '/our-services/website-design',
  ]

  // Create sitemap entries
  const sitemap = routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  })) as MetadataRoute.Sitemap

  return sitemap
} 