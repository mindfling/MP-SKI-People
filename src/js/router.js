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
import { notFound } from "../components/page404";
import { search } from "./search";

export const router = new Navigo("/", { linksSelector: 'a[href^="/"]' });

export const initRouter = () => {
  // console.log("init router 😃");

  const href = window.location.href;
  const url = document.URL;

  router
    .on("/", async () => {
        console.log('\x1b[32m%s\x1b[0m', 'Главная страница');
        const goods = await getData();
        console.log('goods: ', goods);
        
        header();
        catalog('', main(), goods);
        productList('', "Список товаров", main(),  goods);

        // search();
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

    .on('/search', async (search) => {
        console.log('\x1b[32m%s\x1b[0m', "on Search Поиск 💬 in /search");
        
        const searchQuery = search.params.query || search.params.search || search.params.q || search.params.s;
        console.log('searchQuery: ', searchQuery);

        const data = await getData(searchQuery); // загружаем данные по параметрам поиска
        console.log('router in search data: ', data);

        header();
        catalog('', main(), data);
        productList('', `Найденные товары по запросу \"${searchQuery}\"`, main(), data);
        footer();
      }, {
        leave(done) {
          console.log('\x1b[35m%s\x1b[0m', 'leave Закрываем Поиск 💬');
          catalog('remove');
          productList('remove');
          done();
        }
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
        productList('', "Избранное", main(), goods);
        
        // search();
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
        main().append(notFound('Страница 404 не найдена'));
        footer();

        // search();
        router.updatePageLinks();
      }, {
        leave(done) {
          console.log('\x1b[33m%s\x1b[0m', "Покидаем notFound");
          document.querySelector('.not-found').remove();
          // header('remove');
          // footer('remove');

          done();
        }
      }
    );

  router.resolve();
};
