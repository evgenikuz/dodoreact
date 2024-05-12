import s from "./NewProducts.module.css";
import { Container } from "../Container/Container";
import SliderNewProducts from "../SliderNewProducts/SliderNewProducts";

function NewProducts() {
  return (
    <section className={s.newProducts}>
      <Container>
        <SliderNewProducts />
        <div className={s.gridProducts}>
        </div>
      </Container>
    </section>
  );
}

export default NewProducts;
