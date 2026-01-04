import { FaRegHeart } from "react-icons/fa";
import './ProductCard.css';

function ProductCard({product, type}) {
    return (
        <div className={`product-card ${type}`}>
            <div className='img-container'>
                <img src={product.images[0]} alt={product.name} className='product-img' />
            </div>
            <div className='info-container'>
                <h3 className='product-name'>{product.name}</h3>
                <p className='product-price'>{product.price.toLocaleString()}원</p>
                <div className='product-like'>
                    <span className='heart-icon'><FaRegHeart /></span>
                    <span className='like-count'>{product.favoriteCount}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;