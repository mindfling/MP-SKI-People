import 'normalize.css'
import './styles.scss';
import { initRouter } from './js/router';


const Hello = "World"

const init = () => {
  // init my app
  console.log(`Hello`, Hello);
  initRouter();
}

// initialization
init();
