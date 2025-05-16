import Navigo from "navigo";
import { header } from "../components/header";
import { main } from "../components/main";
import { footer } from "../components/footer";
import { cart } from "../components/cart";
import { catalog } from "../components/catalog";
import { productList } from "../components/productList";
import { getData, loadData } from "./api";
import { addFavorite } from "./addFavorite";
import { loadCart, loadFavorite, localStorageLoad } from "./localstorage";
import { product } from "../components/product";
import { breadcrumb } from "../components/breadcrumb";

const router = new Navigo("/", { linksSelector: 'a[href^="/"]' });

export const initRouter = () => {
  console.log("init router 😃");

  const href = window.location.href;
  const url = document.URL;

  router
    .on("/", async () => {
        console.log('\x1b[32m%s\x1b[0m', 'Главная страница');
        const goods = await getData();
        header();
        catalog('', main(), goods);
        // breadcrumb('', main(), [
        //   { title: 'Главная', href: '/' },
        //   { title: 'Список все товаров', href: '/list' },
        // ]); 
        productList('', "Список товаров", goods, main());
        footer();

        addFavorite(goods);

        router.updatePageLinks();
      }, {
        leave(done) {
          console.log('\x1b[35m%s\x1b[0m', 'leave Главную страницу');
          catalog('remove');
          // breadcrumb('remove');
          productList('remove');
          done();
        },
      }
    )

    .on("/product", async () => {
      console.log('\x1b[35m%s\x1b[0m', "Product Страница товара продукта");
      header();
      breadcrumb('', main(), [
        { title: 'Главная', href: '/' },
        { title: 'Лыжи', href: '/skis' },
        { title: 'Горные лыжи', href: '/skis-mountains' },
      ]); 
      product('Товар Product', main());
      footer();

      router.updatePageLinks();
      }, {
        leave(done) {
          console.log('\x1b[35m%s\x1b[0m', 'leave Закрываем Product');
          breadcrumb('remove');
          product('remove');
          done();
        }
      }
    )

    .on("/favorite", async () => {
        console.log('\x1b[32m%s\x1b[0m', 'Favorite⭐ page Избранное');
        const goods = await loadFavorite();
        header();
        breadcrumb('', main(), [
          { title: 'Избранное⭐', href: '/favorite' },
          { title: 'Борды', href: '/board' },
          { title: 'Сноуборды', href: '/snowboard' },
          { title: 'Горные сноуборды', href: '/winter-snowboard' },
        ]);
        productList('', "Избранное⭐", goods, main());
        footer();

        addFavorite(goods);
        router.updatePageLinks();
      }, {
        leave(done) {
          console.log('\x1b[35m%s\x1b[0m', 'leave Закрываем Избранное');
          breadcrumb('remove');
          productList('remove');
          done();
        }
      }
    )

    .on("/cart", async () => {
        console.log('\x1b[32m%s\x1b[0m', "Cart🛒 Корзина");
        // const data = await getData();
        const cartList = loadCart();
        console.log('cartList: ', cartList);
      
        header();
        cart(`Корзина товаров`, main(), cartList);
        footer();
        router.updatePageLinks();
      }, {
        leave(done) {
          console.log('\x1b[35m%s\x1b[0m', "leave Оставляем корзину");
          cart("remove");
          done();
        },
      }
    )

    .notFound(() => {
        console.log("🤖 page 404");
        
        header();
        const notFound = document.createElement('div');
        notFound.className = 'not-found';
        main().append(notFound);
        notFound.innerHTML = `
            <div class="container page__notfound" style="display:flex;flex-direction:column;justify-content:center;align-items:center;gap:7px;padding:70px;">
              <h1 class="page__title" style="text-align:center;font-size:54px;font-family:cursive;">Title 404 PAGE</h1>
              <p class="page__text" style="text-align:center;">Жаль, похоже страницы по данному адресу не существует ;)</p>
              <a class="page__link" style="text-decoration:underline;" href="/">Вернуться на главную</a>
            </div>
        `;
        footer();


        router.updatePageLinks();
      }, {
        leave(done) {
          console.log('\x1b[33m%s\x1b[0m', "Покидаем notFound");
          // document.body.innerHTML = ``;
          document.querySelector('.not-found').remove();
          // header('remove');
          // footer('remove');

          done();
        }
      }
    );

  router.resolve();
};
