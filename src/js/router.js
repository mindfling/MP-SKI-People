import Navigo from "navigo";
import { header } from "../components/header";
import { main } from "../components/main";
import { footer } from "../components/footer";
import { cart } from "../components/cart";
import { catalog } from "../components/catalog";
import { productList } from "../components/productList";
import { getData, loadData } from "./api";

const router = new Navigo('/', { linksSelector: 'a[href^="/"]' });

export const initRouter = () => {

  // my init router
  console.log("init router 😃");

  router
    .on('/', async () => {
      console.log('Главная страница');
      const goods = await getData();
      
      header();
      // main(catalog());
      catalog(main(), goods);
      productList('Список товаров', goods, main());
      footer();
    })
    
    .on('/favorite', async () => {
      console.log("Favorite⭐ page Избранное");
      const goods = await loadData();

      header();
      productList('Избранное', goods, main());
      footer();
    })

    .on('/product', async () => {
      console.log('Страница товара продукта');

      header();
      footer();
    })

    .on('/cart', async () => {
        console.log("Cart🛒 Корзина");
        // const goods = await getData();
        // const data = localStorageLoad('ski-people-cart');
        header();
        // cart(`Корзина товаров`, main(), data)
        footer();
        router.updatePageLinks();
      },
      // {
      //   leave(done) {
      //     console.log('leave Оставляем корзину');
      //     // productList('remove');
      //     done();
      //   }
      // }
    )

    .notFound(() => {
      console.log("page 404");
      document.body.innerHTML = `
        <main class="main">
          <div class="container page__notfound">
            <h1 class="page__title">Title 404 PAGE</h1>
          </div>
        </main>`;
    });

  router.resolve();
};
