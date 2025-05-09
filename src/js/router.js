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

  const href = window.location.href;
  const url = document.URL;
  // console.log('url page is', href, url);
  
  router
  .on('/', async () => {
      console.log('Главная страница');
      const goods = await getData();
      header();
      catalog(main(), goods);
      productList('Список товаров', goods, main());
      footer();
      router.updatePageLinks();
    })
    
    .on('/favorite', async () => {
      console.log("Favorite⭐ page Избранное");
      const goods = await loadData();
      header();
      productList('Избранное', goods, main());
      footer();
      router.updatePageLinks();
    })

    .on('/product', async () => {
      console.log('Страница товара продукта');

      header();
      footer();
      router.updatePageLinks();
    })

    .on('/cart', async () => {
        console.log("Cart🛒 Корзина");
        const goods = await getData();
        // const data = localStorageLoad('ski-people-cart');
        header();
        // cart(`Корзина товаров`, main(), data)
        router.updatePageLinks();
        footer();
      },
      {
        leave(done) {
          console.log('leave Оставляем корзину');
          productList('remove');
          done();
        }
      }
    )

    .notFound(() => {
      console.log("🤖 page 404");
      document.body.innerHTML = `
        <main class="main">
          <div class="container page__notfound" style="justify-content:center;padding:50px;">
            <h1 class="page__title" style="text-align:center;font-size:54px;font-family:cursive;">Title 404 PAGE</h1>
          </div>
        </main>`;
      header();
      footer();
    });

  router.resolve();
};
