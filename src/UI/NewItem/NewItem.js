import s from "./NewItem.module.css";

function NewItem({ img, product, price }) {
  return (
    <article className={s.newItem}>
      <img className={s.productImg} src={img} alt="product" />
      <div className={s.NewItemDescr}>
        <p className={s.NewItemProduct}>{product}</p>
        <p className={s.NewItemPrice}>{price}</p>
      </div>
    </article>
  );
}

export default NewItem;
