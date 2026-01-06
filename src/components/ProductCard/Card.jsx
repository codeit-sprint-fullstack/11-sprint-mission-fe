import './Card.css';
import imgSample from '/src/assets/image_sample.png';

// function ProductCard({name, price, images, favoriteCount}) //이미지 샘플 넣고 주석처리함 
function ProductCard({ name, price, favoriteCount }) {
  return (
    <div className="card">
      {/* <img src={images} alt={name}/> */}
      <img src={imgSample} alt={name} />
      <div className="card-info">
        <p className="card-title">{name}</p>
        <p className="card-price">{price}</p>
        <div className="card-like">
          <img src="/src/assets/like.svg" alt='좋아요'/>
          <p className="like-counter">{favoriteCount}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
