import { Button } from '@/components/UI/Button';
import { Input } from '@/components/UI/Input';
import { useEffect, useRef } from 'react';


function AdditemPage() {
const submit = (formData) => {
  const data = Object.fromEntries(formData.fromEntries());
  console.log(data); //onSubmit(data)
};

const inputRef = useRef(null);

useEffect(() => {
  if (inputRef.current) {
    inputRef.current.focus()
  }
},[]);

  return (
    <div>
      <form action={submit}>
        <div>
          <h1>상품 등록하기</h1>
          <Button>등록</Button>
        </div>
        <label>상품명</label>
        <Input
          name="name"
          type="text"
          placeholder="상품명을 입력해주세요"
          ref={inputRef}
        />
        <label htmlFor="">상품 소개</label>
        <textarea name="description" placeholder="상품소개를 입력해주세요" />
        <label>판매가격</label>
        <Input name="price" type="text" placeholder="판매가격을 입력해주세요" />
        <label>태그</label>
        <Input name="tags" type="text" placeholder="태그를 입력해주세요" />
        <div>태그</div>
      </form>
    </div>
  );
}

export default AdditemPage;
