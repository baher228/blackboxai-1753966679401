import React from 'react';
import SectionCard from './SectionCard';

interface NewsItem {
  imageSrc: string;
  title: string;
  category: string;
  link: string;
  description?: string;
}

const NewsSection: React.FC = () => {
  const newsItems: NewsItem[] = [
    {
      imageSrc: 'https://fabrikuk.com/wp-content/uploads/2025/04/meeting-594091_1920-10x7.jpg',
      title: 'See you at UKREIIF!',
      category: 'news',
      link: '/news/see-you-at-ukreiif',
      description: 'fabrik are looking forward to attending this years\' conference'
    },
    {
      imageSrc: 'https://fabrikuk.com/wp-content/uploads/2025/04/FCB-studios_Rotherhithe-Primary-School_London_©HuftonCrow_021-FCBS_WEB-10x5.jpg',
      title: 'A school in a garden',
      category: 'celebrate',
      link: '/news/a-school-in-a-garden',
      description: 'Rotherhithe Primary School wins Civic Trust Award'
    },
    {
      imageSrc: 'https://fabrikuk.com/wp-content/uploads/2025/04/D2977_Park-01_lr-10x6.jpg',
      title: 'Setting the benchmark',
      category: 'celebrate',
      link: '/news/setting-the-benchmark',
      description: 'Gascoigne West Phase 2 wins Place of the Year for the second year in a row'
    }
  ];

  return (
    <section style={newsSectionStyles}>
      <div style={containerStyles}>
        <div style={headerStyles}>
          <h2 style={titleStyles}>Common ground</h2>
          <a href="/sharing-listening" style={viewAllLinkStyles}>
            view all news →
          </a>
        </div>
        
        <div style={newsGridStyles}>
          {newsItems.map((item, index) => (
            <div key={index} style={newsItemStyles}>
              <SectionCard
                imageSrc={item.imageSrc}
                title={item.title}
                subtitle={item.description}
                link={item.link}
                category={item.category}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const newsSectionStyles: React.CSSProperties = {
  padding: '4rem 0',
  backgroundColor: '#fff',
};

const containerStyles: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 2rem',
};

const headerStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '3rem',
};

const titleStyles: React.CSSProperties = {
  fontSize: '2.5rem',
  fontWeight: '400',
  color: '#000',
  margin: 0,
};

const viewAllLinkStyles: React.CSSProperties = {
  fontSize: '0.9rem',
  color: '#666',
  textDecoration: 'none',
  fontWeight: '500',
  transition: 'color 0.3s ease',
};

const newsGridStyles: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem',
};

const newsItemStyles: React.CSSProperties = {
  // Individual news item styling if needed
};

// Add responsive styles
const mediaQueryStyles = `
  @media (max-width: 768px) {
    .news-header {
      flex-direction: column !important;
      align-items: flex-start !important;
      gap: 1rem !important;
    }
    
    .news-title {
      font-size: 2rem !important;
    }
    
    .news-grid {
      grid-template-columns: 1fr !important;
      gap: 1.5rem !important;
    }
    
    .news-container {
      padding: 0 1rem !important;
    }
  }
  
  @media (max-width: 480px) {
    .news-title {
      font-size: 1.75rem !important;
    }
  }
  
  .view-all-link:hover {
    color: #000 !important;
  }
`;

if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = mediaQueryStyles;
  document.head.appendChild(styleElement);
}

export default NewsSection;
