import facebook from '../assets/icons/facebook.svg';
import instagram from '../assets/icons/instagram.svg';
import twitter from '../assets/icons/twitter.svg';
import youtube from '../assets/icons/youtube.svg';

export function Footer() {
  return (
    <footer className="h-40 bg-[#111827] px-50 shrink-0">
      <div className="max-w-380 mx-auto flex justify-between pt-8">
        <span className="text-[#9CA3AF]">©codeit - 2024</span>
        <nav className="text-[#E5E7EB]">
          <a href="/privacy" className="mr-7.5">
            Privacy Policy
          </a>
          <a href="/faq">FAQ</a>
        </nav>
        <ul className="flex gap-3">
          <li>
            <a
              target="_blank"
              href="https://www.facebook.com/"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="페이스북 아이콘" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://x.com/" rel="noopener noreferrer">
              <img src={twitter} alt="X 아이콘" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.youtube.com/"
              rel="noopener noreferrer"
            >
              <img src={youtube} alt="유튜브 아이콘" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.instagram.com/"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="인스타그램 아이콘" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
