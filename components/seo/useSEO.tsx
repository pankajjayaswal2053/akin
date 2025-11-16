import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export const useSEO = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
}: SEOProps) => {
  useEffect(() => {
    const fullTitle = `${title} | Akin Technology`;
    document.title = fullTitle;

    const setMetaTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name='${name}']`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const setPropertyTag = (property: string, content: string) => {
        let element = document.querySelector(`meta[property='${property}']`);
        if (!element) {
          element = document.createElement('meta');
          element.setAttribute('property', property);
          document.head.appendChild(element);
        }
        element.setAttribute('content', content);
    };
    
    const setLinkTag = (rel: string, href: string) => {
        let element = document.querySelector(`link[rel='${rel}']`);
        if (!element) {
          element = document.createElement('link');
          element.setAttribute('rel', rel);
          document.head.appendChild(element);
        }
        element.setAttribute('href', href);
    };

    setMetaTag('description', description);
    if (keywords) {
        setMetaTag('keywords', keywords);
    }
    
    const currentUrl = window.location.href;
    const baseUrl = window.location.origin;

    // Open Graph
    setPropertyTag('og:title', ogTitle || fullTitle);
    setPropertyTag('og:description', ogDescription || description);
    setPropertyTag('og:url', currentUrl);
    setPropertyTag('og:image', ogImage ? `${baseUrl}${ogImage}` : `${baseUrl}/images/og-default.jpg`);

    // Twitter Card
    setMetaTag('twitter:title', ogTitle || fullTitle);
    setMetaTag('twitter:description', ogDescription || description);
    setMetaTag('twitter:image', ogImage ? `${baseUrl}${ogImage}` : `${baseUrl}/images/og-default.jpg`);

    // Canonical URL
    setLinkTag('canonical', currentUrl);

  }, [title, description, keywords, ogTitle, ogDescription, ogImage]);
};
