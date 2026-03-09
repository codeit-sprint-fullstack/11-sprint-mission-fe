'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import SearchBar from '@/components/common/SearchBar';
import Dropdown from '@/components/common/Dropdown';
import { BiSortDown } from 'react-icons/bi';
import { TiArrowSortedDown } from 'react-icons/ti';
import * as styles from './ListControls.css.js';

function ListControlsInner({ currentSort, currentKeyword }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [keyword, setKeyword] = useState(currentKeyword);

  const handleUpdate = (name, value) => {
    const params = new URLSearchParams(searchParams.toString());

    value ? params.set(name, value) : params.delete(name);

    params.set('page', '1');
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className={styles.container}>
      <SearchBar
        keyword={keyword}
        onChange={setKeyword}
        onKeyDown={(event) =>
          event.key === 'Enter' && handleUpdate('q', keyword)
        }
      />

      <Dropdown
        trigger={
          <div className={styles.sortToggle}>
            <span className={styles.mobileSort}>
              <BiSortDown />
            </span>
            <span className={styles.desktopSort}>
              {currentSort === 'recent' ? '최신순' : '좋아요순'}
              <TiArrowSortedDown />
            </span>
          </div>
        }
      >
        <div
          className={styles.sortOption}
          onClick={() => handleUpdate('orderBy', 'recent')}
        >
          최신순
        </div>
        <div
          className={styles.sortOption}
          onClick={() => handleUpdate('orderBy', 'favorite')}
        >
          좋아요순
        </div>
      </Dropdown>
    </div>
  );
}

export default function ListControls(props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ListControlsInner {...props} />
    </Suspense>
  );
}
