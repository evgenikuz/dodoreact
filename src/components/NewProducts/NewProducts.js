import s from "./NewProducts.module.css";
import { Container } from "../Container/Container";
import SliderNewProducts from "../SliderNewProducts/SliderNewProducts";

function NewProducts() {
  return (
    <section className={s.newProducts}>
      <Container>
        <SliderNewProducts />
        <div className={s.gridProducts}>
          {/* {data.map((el) => (
            <NewItem img={el.img} product={el.name} price={el.price} />
          ))} */}
        </div>
      </Container>
    </section>
  );
}

export default NewProducts;
