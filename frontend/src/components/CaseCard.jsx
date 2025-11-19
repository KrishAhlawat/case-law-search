import React from 'react';

function CaseCard({ caseLaw, index }) {
  return (
    <div 
      className="case-card"
      style={{
        // Staggered fade-in animation based on card index
        animationDelay: `${index * 0.1}s`
      }}
    >
      {/* Case Title */}
      <h3 className="case-title">{caseLaw.title}</h3>
      
      {/* Case Citation */}
      <p className="case-citation">{caseLaw.citation}</p>
      
      {/* Keywords Section */}
      <div className="keywords-container">
        {caseLaw.keywords.map((keyword, idx) => (
          <span key={idx} className="keyword-tag">
            {keyword}
          </span>
        ))}
      </div>
    </div>
  );
}

export default CaseCard;
