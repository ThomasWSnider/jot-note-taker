import { ExamplesController } from "./controllers/ExamplesController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [ExamplesController,],
    view: 'app/views/JotView.html'
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])