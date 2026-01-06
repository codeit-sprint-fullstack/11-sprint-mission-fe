import axios from "axios";

export function handleAxiosError(error) {
  if (axios.isAxiosError(error)) {
    // 1. 서버 응답이 있는 경우
    if (error.response) {
      // 500번대 서버 에러 처리
      if (error.response.status >= 500) {
        console.error(" 서버 에러:", error.response.data);
        alert("서버에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.");
        return;
      }

      // 400번대 클라이언트 에러 등 커스텀 메시지 처리
      const data = error.response.data;
      console.log(data);
      if (data && data.message) {
        alert(data.message);
        return;
      }
    }
  }

  // 그 외 네트워크 에러 등
  console.error(" 알 수 없는 에러:", error);
  alert("요청을 처리하는 중 오류가 발생했습니다.");
}
