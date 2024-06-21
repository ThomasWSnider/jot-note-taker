import { ExamplesController } from "./controllers/ExamplesController.js";
import { NotesController } from "./controllers/NotesController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [ExamplesController, NotesController],
    view: ''
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])