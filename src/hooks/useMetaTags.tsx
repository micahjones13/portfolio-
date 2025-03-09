import { useEffect } from 'react';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
}

export const useMetaTags = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogUrl,
  twitterTitle,
  twitterDescription,
}: MetaTagsProps) => {
  useEffect(() => {
    // Update title
    if (title) {
      document.title = title;
    }

    // Update meta tags
    const metaTags = {
      description,
      keywords,
      'og:title': ogTitle || title,
      'og:description': ogDescription || description,
      'og:url': ogUrl,
      'twitter:title': twitterTitle || ogTitle || title,
      'twitter:description': twitterDescription || ogDescription || description,
    };

    // Update or create meta tags
    Object.entries(metaTags).forEach(([name, content]) => {
      if (!content) return;

      // Check if meta tag exists
      let metaTag = document.querySelector(`meta[name="${name}"]`) ||
                    document.querySelector(`meta[property="${name}"]`);

      if (!metaTag) {
        // Create new meta tag if it doesn't exist
        metaTag = document.createElement('meta');
        if (name.startsWith('og:')) {
          metaTag.setAttribute('property', name);
        } else {
          metaTag.setAttribute('name', name);
        }
        document.head.appendChild(metaTag);
      }

      // Update content
      metaTag.setAttribute('content', content);
    });

    // Cleanup function
    return () => {
      // Reset title to default if needed
      if (title) {
        document.title = 'Micah Jones - Full Stack Developer';
      }
    };
  }, [title, description, keywords, ogTitle, ogDescription, ogUrl, twitterTitle, twitterDescription]);
}; 