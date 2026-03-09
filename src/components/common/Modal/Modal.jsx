'use client';

import { useModalStore } from '@/stores/modal.store';
import Button from '@/components/common/Button';
import * as styles from './Modal.css.js';

export default function Modal() {
  const { isOpen, message, closeModal } = useModalStore();

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        <p className={styles.message}>{message}</p>
        <Button
          size="md"
          color="primary"
          shape="square"
          className={styles.confirmButton}
          onClick={closeModal}
        >
          확인
        </Button>
      </div>
    </div>
  );
}
