import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useProductValidation } from '@/hooks/useProductValidation';
import ProductRegistrationForm from '@/features/ProductRegistrationForm';
import './ProductRegistrationPage.css';

function ProductRegistrationPage() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState([]);

  const { errors, validate } = useProductValidation();

  const isFormValid =
    name.trim() !== '' &&
    description.trim() !== '' &&
    price.trim() !== '' &&
    Object.values(errors).every((error) => error === '');

  const formData = { name, description, price, tag, tags };
  const changes = { setName, setDescription, setPrice, setTag, setTags };

  return (
    <div className="registration-container">
      <div className="registration-header">
        <h2>상품 등록하기</h2>
        <button
          className={`button submit-button ${isFormValid ? 'active' : ''}`}
          disabled={!isFormValid}
          onClick={() => navigate('/product')}
        >
          등록
        </button>
      </div>

      <ProductRegistrationForm
        formData={formData}
        changes={changes}
        errors={errors}
        validate={validate}
      />
    </div>
  );
}

export default ProductRegistrationPage;
