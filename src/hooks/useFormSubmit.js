import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function useFormSubmit() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (submitApi, redirectPath) => {
    setIsLoading(true);
    try {
      const result = await submitApi();
      const targetId = result.id;

      router.push(`${redirectPath}/${targetId}`);
      router.refresh();
    } catch (error) {
      console.error(error);
      alert(error.message || '데이터 전송 실패');
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, handleFormSubmit };
}