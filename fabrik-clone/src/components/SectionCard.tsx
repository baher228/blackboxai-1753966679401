import React from 'react';
import { Link } from 'react-router-dom';

interface SectionCardProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
  link: string;
  category?: string;
}

const SectionCard: React.FC<SectionCardProps> = ({ 
  imageSrc, 
  title, 
  subtitle, 
  link, 
  category 
}) => {
  return (
    <div style={cardStyles}>
      <Link to={link} style={cardLinkStyles}>
        <div style={imageContainerStyles}>
          <img 
            src={imageSrc} 
            alt={title} 
            style={imageStyles}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.backgroundColor = '#f0f0f0';
              target.style.display = 'flex';
              target.style.alignItems = 'center';
              target.style.justifyContent = 'center';
              target.alt = 'Image not available';
            }}
          />
        </div>
        <div style={contentStyles}>
          {category && (
            <span style={categoryStyles}>[{category}]</span>
          )}
          {subtitle && (
            <p style={subtitleStyles}>{subtitle}</p>
          )}
          <h3 style={titleStyles}>{title}</h3>
        </div>
      </Link>
    </div>
  );
};

const cardStyles: React.CSSProperties = {
  backgroundColor: '#fff',
  borderRadius: '8px',
  overflow: 'hidden',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',
};

const cardLinkStyles: React.CSSProperties = {
  display: 'block',
  textDecoration: 'none',
  color: 'inherit',
};

const imageContainerStyles: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  paddingBottom: '60%', // 5:3 aspect ratio
  overflow: 'hidden',
};

const imageStyles: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.3s ease',
};

const contentStyles: React.CSSProperties = {
  padding: '1.5rem',
};

const categoryStyles: React.CSSProperties = {
  fontSize: '0.8rem',
  color: '#666',
  fontStyle: 'italic',
  marginBottom: '0.5rem',
  display: 'block',
};

const subtitleStyles: React.CSSProperties = {
  fontSize: '0.9rem',
  color: '#666',
  marginBottom: '0.5rem',
  fontWeight: '400',
};

const titleStyles: React.CSSProperties = {
  fontSize: '1.25rem',
  fontWeight: '600',
  color: '#000',
  lineHeight: '1.3',
  margin: 0,
};

// Add hover effects
const mediaQueryStyles = `
  .section-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
  
  .section-card:hover img {
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    .section-card-content {
      padding: 1rem !important;
    }
    
    .section-card-title {
      font-size: 1.1rem !important;
    }
  }
`;

if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = mediaQueryStyles;
  document.head.appendChild(styleElement);
}

export default SectionCard;
