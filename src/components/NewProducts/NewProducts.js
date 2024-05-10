// import { useEffect, useState } from "react";
import NewItem from "../../UI/NewItem/NewItem";
import s from "./NewProducts.module.css";
import { data } from "../../dodo";
import { Container } from "../Container/Container";
import { GridTitle } from "../GridTitle/GridTitle";

function NewProducts() {
  return (
    <section className={s.newProducts}>
      <Container>
        <GridTitle/>
        <div className={s.gridProducts}>
          
{/* <div id="carousel-1" class="carousel slide multi-carousel" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carousel-1" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-1" data-slide-to="1"></li>
        <li data-target="#carousel-1" data-slide-to="2"></li>
        <li data-target="#carousel-1" data-slide-to="3"></li>
        <li data-target="#carousel-1" data-slide-to="4"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <div class="item-third"><img src="https://source.unsplash.com/juHayWuaaoQ/1200x400" alt="#"></div>
        </div>
        <div class="carousel-item">
          <div class="item-third"><img src="https://source.unsplash.com/eWFdaPRFjwE/1200x400" alt="#"></div>
        </div>
        <div class="carousel-item">
          <div class="item-third"><img src="https://source.unsplash.com/eXHeq48Z-Q4/1200x400" alt="#"></div>
        </div>
        <div class="carousel-item">
          <div class="item-third"><img src="https://source.unsplash.com/WLUHO9A_xik/1200x400" alt="#"></div>
        </div>
        <div class="carousel-item">
          <div class="item-third"><img src="https://source.unsplash.com/ddLiNMqWAOM/1200x400" alt="#"></div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Предыдущий</span>
      </a>
      <a class="carousel-control-next" href="#carousel-1" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Cледующий</span>
      </a>
    </div> */}
          {data.map((el) => (
            <NewItem img={el.img} product={el.name} price={el.price} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default NewProducts;
