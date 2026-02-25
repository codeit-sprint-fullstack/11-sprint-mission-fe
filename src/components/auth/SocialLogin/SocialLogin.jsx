import Image from 'next/image';
import kakao from '@/assets/icons/sns/kakao.svg'
import google from '@/assets/icons/sns/google.png'
import * as styles from './SocialLogin.css.js';

export default function SocialLogin() {
  return (
    <div className={styles.container}>
      <span className={styles.title}>간편 로그인하기</span>
      <div className={styles.iconGroup}>
        {/* 아직 기능 구현은 안함 */}
        <button type="button" className={styles.iconButton} >
          <Image
            src={google} 
            alt="구글 로그인" 
            width={42} 
            height={42} 
          />
        </button>

        <button type="button" className={styles.iconButton} >
          <Image 
            src={kakao} 
            alt="카카오 로그인" 
            width={42} 
            height={42} 
          />
        </button>
      </div>
    </div>
  );
}
