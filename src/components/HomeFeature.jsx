import './HomeFeature.css';

function HomeFeature({ imageSrc, imageAlt, badge, title, description }) {
  return (
    <div className="feature">
      <div className="feature-content">
        <img src={imageSrc} alt={imageAlt} />
        <div className="feature-text">
          <span>{badge}</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default HomeFeature;
