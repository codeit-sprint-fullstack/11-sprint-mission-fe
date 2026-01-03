import facebookIcon from '@/assets/images/ic_facebook.svg';
import twitterIcon from '@/assets/images/ic_twitter.svg';
import youtubeIcon from '@/assets/images/ic_youtube.svg';
import instagramIcon from '@/assets/images/ic_instagram.svg';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-copyright">©codeit - 2024</div>
        <ul className="footer-links">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
        <div className="social-media">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookIcon} alt="페이스북" />
          </a>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="트위터" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtubeIcon} alt="유튜브" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="인스타그램" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
