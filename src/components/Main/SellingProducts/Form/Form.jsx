import { Logo } from '@/components/common/Logo';
import { Button } from '@/components/common/Button';
import { Select } from './Select';
import search from '@/assets/ic_search.svg';
import styles from './Form.module.css';

export function Form({ children, id, type = 'text', placeholder = '', showLabel = true }) {
  return (
    <form className={styles.form}>
      <label htmlFor={id} className={showLabel ? styles.srOnly : undefined}>
        {children}
      </label>
      <div className={styles.wrap}>
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          className={styles.input}
        />
        <Logo src={search} alt="돋보기 아이콘" className={styles.search} />
      </div>
      <Button>상품 등록하기</Button>
      <Select id={id} />
    </form>
  );
}
