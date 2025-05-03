import Navigo from "navigo";
import { header } from "../components/header";
import { footer } from "../components/footer";
import { main } from "../components/main";
import { cart } from "../components/cart";

const router = new Navigo("/", { linksSelector: 'a[href^="/"]' });

export const initRouter = () => {

  // my init router
  console.log("init router 😃");

  router
    .on("/", () => {
      console.log("Главная страница");
      document.body.prepend(header());
      document.body.append(main())
      document.body.append(footer());
    })
    .on("/main", () => {
      console.log("Main page");
      document.body.prepend(header());
      document.body.append(main())
      document.body.append(footer());
    })
    .on("/favorite", () => {
      console.log("Favorite page Избранное");
      document.body.prepend(header());
      document.body.append(footer());
    })
    .on('/cart', async () => {
        console.log("Cart Корзина");
        // const goods = await getData();
        header();
        cart(`Корзина товаров`, main(), localStorageLoad('ski-people-cart'))
        footer();
        // search();
        // document.body.prepend(header());
        // document.body.append(footer());
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
      document.body.prepend(header());
      document.body.append(footer());
      alert(404);
    });

  router.resolve();
};
