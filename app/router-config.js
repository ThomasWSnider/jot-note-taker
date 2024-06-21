import { ExamplesController } from "./controllers/ExamplesController.js";
import { JotsController } from "./controllers/JotsController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [ExamplesController, JotsController],
    view: 'app/views/JotView.html'
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])