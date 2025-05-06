import Navigo from "navigo";
import { header } from "../components/header";
import { main } from "../components/main";
import { footer } from "../components/footer";
import { cart } from "../components/cart";
import { catalog } from "../components/catalog";

const router = new Navigo('/', { linksSelector: 'a[href^="/"]' });

export const initRouter = () => {

  // my init router
  console.log("init router 😃");

  router
    .on('/', async () => {
      console.log('Главная страница');
      const goods = await getData();
      header();
      catalog(main(), goods);
      productsList('Список товаров', goods, main());
      footer();
    })
    
    .on('/favorite', () => {
      console.log("Favorite page Избранное");

    })
    
    .on('/cart', async () => {
        console.log("Cart Корзина");
        const goods = await getData();
        const data = localStorageLoad('ski-people-cart');
        header();
        cart(`Корзина товаров`, main(), data)
        footer();
        router.updatePageLinks();
      },
      {
        leave(done) {
          console.log('leave Оставляем корзину');
          // productsList('remove');
          done();
        }
      }
    )
    .notFound(() => {
      console.log("page 404");
      document.body.innerHTML = `
        <main class="main">
          <div class="container page__notfound">
            <h1 class="page__title">Title 404 PAGE</h1>
          </div>
        </main>`;
      alert(404);
    });

  router.resolve();
};
