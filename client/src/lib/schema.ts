export interface BlogArticleSchema {
  "@context": string;
  "@type": string;
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: {
    "@type": string;
    name: string;
    url: string;
  };
  publisher: {
    "@type": string;
    name: string;
    logo: {
      "@type": string;
      url: string;
    };
  };
  mainEntityOfPage: {
    "@type": string;
    "@id": string;
  };
  keywords: string[];
}

export function generateArticleSchema(blogPost: {
  id: number;
  title: string;
  metaDescription?: string;
  excerpt: string;
  image: string;
  date: string;
  keywords?: string[];
}): BlogArticleSchema {
  const articleUrl = `https://www.drurmilbishnoi.in/blog/${blogPost.id}`;
  const logoUrl = "https://www.drurmilbishnoi.in/logo.png";
  
  const datePublished = new Date(blogPost.date).toISOString();
  const dateModified = new Date(blogPost.date).toISOString();

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blogPost.title,
    description: blogPost.metaDescription || blogPost.excerpt,
    image: blogPost.image,
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: "Dr. Urmil Bishnoi",
      url: "https://www.drurmilbishnoi.in/about"
    },
    publisher: {
      "@type": "Organization",
      name: "Dr. Urmil Bishnoi Psychology Clinic",
      logo: {
        "@type": "ImageObject",
        url: logoUrl
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl
    },
    keywords: blogPost.keywords || []
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Dr. Urmil Bishnoi - Best Psychologist in Jaipur",
    image: "https://www.drurmilbishnoi.in/logo.png",
    "@id": "https://www.drurmilbishnoi.in",
    url: "https://www.drurmilbishnoi.in",
    telephone: "+91-XXXXXXXXXX",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Clinic Address",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      postalCode: "302XXX",
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.9124,
      longitude: 75.7873
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00"
      }
    ],
    sameAs: [
      "https://www.facebook.com/drurmilbishnoi",
      "https://www.instagram.com/drurmilbishnoi",
      "https://www.linkedin.com/in/drurmilbishnoi"
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Mental Health Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Anxiety Treatment",
            description: "Expert anxiety disorder treatment and therapy"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Depression Therapy",
            description: "Compassionate depression treatment and counseling"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "PTSD Treatment",
            description: "Specialized trauma-focused therapy for PTSD"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hypnotherapy",
            description: "Clinical hypnotherapy for various conditions"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Career Counseling",
            description: "Professional career guidance and counseling"
          }
        }
      ]
    }
  };
}
