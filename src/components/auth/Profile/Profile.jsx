'use client';

import { useUser } from '@/hooks/auth/useUser';
import { authApi } from '@/services/authApi';
import Image from 'next/image';
import defaultProfile from '@/assets/icons/profile/ic_profile_lg.svg';
import Dropdown from '@/components/common/Dropdown';
import * as styles from './Profile.css.js';

export default function Profile() {
  const { user } = useUser();

  const handleLogout = () => {
    authApi.logout();

    window.location.href = '/';
  };

  if (!user) {
    return null;
  }

  return (
    <Dropdown
      trigger={
        <div className={styles.profileTrigger}>
          <Image
            src={user.image || defaultProfile}
            alt="프로필 이미지"
            width={40}
            height={40}
            className={styles.avatar}
          />
          <span className={styles.nickname}>{user.nickname}</span>
        </div>
      }
    >
      <div className={styles.logout} onClick={handleLogout}>
        로그아웃
      </div>
    </Dropdown>
  );
}
