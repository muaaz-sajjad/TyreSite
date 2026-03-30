import { siteConfig } from '@/config/site';
import { faqs } from '@/data/faqs';
import { services } from '@/data/services';

export default function StructuredData() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.business.name,
    url: siteConfig.business.url,
    telephone: siteConfig.business.phone,
    email: siteConfig.business.email,
    description:
      'Premium mobile tyre fitting service across London & surrounding counties. 24/7 emergency callouts, 30-minute response.',
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    areaServed: [
      'Greater London',
      'Surrey',
      'Buckinghamshire',
      'Hertfordshire',
      'Kent',
      'Essex',
      'Berkshire',
      'Bedfordshire',
      'Oxfordshire',
      'West Sussex',
      'East Sussex',
      'Cambridgeshire',
      'Hampshire',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: siteConfig.rating.score,
      reviewCount: siteConfig.rating.count,
      bestRating: 5,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  const serviceSchema = services.map((service) => ({
    '@type': 'Service',
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.business.name,
    },
    name: service.title,
    description: service.desc,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
