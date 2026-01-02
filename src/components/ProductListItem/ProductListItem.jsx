export function ProductListItem({ item }) {
  return (
    <div>
      <img 
        src={item.images}
        art={item.title}
      />
      <h3>타이틀 {item.name}</h3>
      <h3>가격 {item.price}</h3>
      <p>좋아요{item.favoriteCount}</p>
    </div>
  );
}
