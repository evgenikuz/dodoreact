import s from "./Footer.module.css";
import appStore from "./img/Appstore.png";
import googlePlay from "./img/GooglePlay.png";
import logo from "./img/Group.png";
import facebook from "./img/facebook.png";
import instagram from "./img/instagramm.png";
import odnoklassniki from "./img/odnoklassniki.png";
import vk from "./img/vk.png";
import youtube from "./img/youtube.png";
import { Container } from "../Container/Container";

export const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer>
      <div className={s.footer}>
      <Container>
        <div className={s.footerup}>
          <div className={s.footerleft}>
            <div className={s.footerleft__up}>
              <ul className={s.footer__ul}>
                Додо пицца
                <li className={s.footer__li}>О нас</li>
                <li className={s.footer__li}>Блог «Сила ума»</li>
                <li className={s.footer__li}>Додо ИС</li>
              </ul>
              <ul className={s.footer__ul}>
                Работа
                <li className={s.footer__li}>В пиццерии</li>
                <li className={s.footer__li}>В контакт- центре</li>
              </ul>
              <ul className={s.footer__ul}>
                Партнерам
                <li className={s.footer__li}>Франшиза</li>
                <li className={s.footer__li}>Инвестиции</li>
                <li className={s.footer__li}>Поставщикам</li>
                <li className={s.footer__li}>Предложить помещение</li>
              </ul>
              <ul className={s.footer__ul}>
                Это интересно
                <li className={s.footer__li}>Экскурсии и мастер-классы</li>
                <li className={s.footer__li}>Корпоративные заказы</li>
              </ul>
            </div>
            <div className={s.footerleft__down}>
              <div className={s.aboutCard}>
                <p className={s.number}>1 396 362 874 ₽</p>
                <p className={s.descr}>
                  Выручка российской сети в этом месяце. В прошлом — 2 460 305
                  416 ₽
                </p>
              </div>
              <div className={s.aboutCard}>
                <p className={s.number}>688 пиццерий</p>
                <p className={s.descr}>
                  в 14 странах, включая Китай, США и Великобританию
                </p>
              </div>
            </div>
          </div>
          <div className={s.footerright}>
            <div className={s.footerright__up}>
              <img src={appStore} alt="appstore" />
              <img src={googlePlay} alt="googlePlay" />
            </div>
            <div className={s.footerright__down}>
              <a href="tel:8-800-302-00-60" className={s.phone}>
                8-800-302-00-60
              </a>
              <p className={s.phonetext}>Звонок бесплатный</p>
              <a href="mailto:feedback@dodopizza.com" className={s.mail}>
                feedback@dodopizza.com
              </a>
            </div>
          </div>
        </div>
        <hr className={s.footer__hr} />
        <div className={s.footerdown}>
          <div className={s.footerdown__left}>
            <img src={logo} alt="logo" />
            <p className={s.year}>© {year}</p>
          </div>

          <div className={s.footerdown__center}>
            <ul className={s.footer__ul}>
              <li className={s.footer__li}>Правовая информация</li>
              <li className={s.footer__li}>Калорийность и состав</li>
              <li className={s.footer__li}>Помощь</li>
            </ul>
          </div>
          <div className={s.footerdown__right}>
            {/* <img src={facebook} alt="facebook" />
          
          
           
            */}

            <a href="#">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="#">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="#">
              <img src={odnoklassniki} alt="odnoklassniki" />
            </a>
            <a href="#">
              <img src={vk} alt="vk" />
            </a>
            <a href="#">
              <img src={youtube} alt="youtube" />
            </a>
          </div>
        </div>
      </Container>
      </div>
    </footer>
  );
};
