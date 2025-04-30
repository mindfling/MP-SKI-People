import Navigo from "navigo";
import { header } from "../components/header";
import { footer } from "../components/footer";
import { main } from "../components/main";

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
    .on("/cart", () => {
      console.log("Cart Корзина");
      document.body.prepend(header());
      document.body.append(footer());
    })
    .notFound(() => {
      console.log("page 404");
      document.body.innerHTML = `<h1 class="page__title">Title 404 PAGE</h1>`
      document.body.prepend(header());
      document.body.append(footer());
      alert(404);
    });

  router.resolve();
};
