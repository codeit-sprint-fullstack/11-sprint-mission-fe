import { Link } from 'react-router';
import './Banner.css';

function Banner({ title, buttonText, buttonLink, imageSrc }) {
  return (
    <section className="banner">
      <div className="banner-content">
        <h2>{title}</h2>
        {/* 상단 베너에만 버튼이 있음 -> buttonText 있을 때만 활성화 */}
        {buttonText && (
          <Link to={buttonLink} className="button button-round">
            {buttonText}
          </Link>
        )}
      </div>
      <img src={imageSrc} alt="베너 이미지" />
    </section>
  );
}

export default Banner;
