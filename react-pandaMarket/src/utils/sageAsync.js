// 에러 핸들 공통 함수

export const safeAsync = (fn, onError) => {
  fn().catch(onError);
};
