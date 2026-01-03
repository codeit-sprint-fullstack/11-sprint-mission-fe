import './ProductList.css';

function ProductList() {
    return (
        <section className='list-section'>
            <div className='sectoin-wrapper'>
                <div className='section-header'>
                    <h2>판매 중인 상품</h2>
                    <div className='section-nav'>
                        <input type='text' placeholder='검색할 상품을 입력해주세요' className="item-search"></input>
                        <button className="button registration-button">상품 등록하기</button>
                        <div className="sort-dropdown">최신순</div>
                    </div>
                </div>
                <div className='list-container'>
                    <div>상품</div>
                </div>
            </div>
        </section>
    )
}

export default ProductList;