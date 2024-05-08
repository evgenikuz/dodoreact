// import { useEffect, useState } from "react";
import NewItem from "../../UI/NewItem/NewItem";
import s from "./NewProducts.module.css";
import { data } from "../../dodo";
import { Container } from "../Container/Container";

function NewProducts() {
  return (
    <section className={s.newProducts}>
      <Container>
        <div className={s.gridProducts}>
          {data.map((el) => (
            <NewItem img={el.img} product={el.name} price={el.price} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default NewProducts;
