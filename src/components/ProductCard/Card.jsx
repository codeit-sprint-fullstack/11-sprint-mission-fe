import imgSample from '/src/assets/image_sample.png'

// function ProductCard({name, price, images, favoriteCount}) {
function ProductCard({name, price, favoriteCount}) {
  return (
    <div className="card">
      {/* <img src={images} alt={name}/> */}
      <img src={imgSample} alt={name}/>
      <div className="card-info">
        <p className="card-pitle">{name}</p>
        <p className="card-price">{price}</p>
        <div className="card-like">
          <img src="/src/assets/like.svg" />
          <p className="like-counter">{favoriteCount}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
