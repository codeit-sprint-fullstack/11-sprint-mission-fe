function Footer() {
  return (
    <footer>
      <div className="content-footer">
        <div className="info-com">©codeit - 2024</div>
        <div className="links-footer">
          <a href="/pages/privacy.html">Privacy Policy</a>
          <a href="/pages/faq.html">FAQ</a>
        </div>
        <div className="SNS">
          <a href="https://www.facebook.com/" target="_blank">
            <img src="/src/assets/facebook.svg" />
          </a>
          <a href="https://x.com/" target="_blank">
            <img src="/src/assets/twitter.svg" />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <img src="/src/assets/youtube.svg" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src="/src/assets/instagram.svg" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
