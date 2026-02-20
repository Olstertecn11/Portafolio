
import Home from '../pages/Home'
import Skills from "../pages/Skills"
import Projects from "../pages/Projects"

export default {
  public: [
    { path: '/', element: Home, navbarInside: true, isMain: true },
    { path: '/Skills', element: Skills },
    { path: '/Projects', element: Projects }
  ]
}
