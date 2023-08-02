import Home from './component/Home'
import About from './component/About'
import Services from './component/Services'
import Tours from './component/Tours'
import Contact from './component/Contact'
import Gallery from './component/Gallerys'
import Footer from './component/Footer'

function App() {
  return (
    <>
      {/* <!-- home --> */}
      <Home />
      {/* <!-- about section --> */}
      <About />
      {/* <!-- service section --> */}
      <Services />
      {/* <!-- tour section --> */}
      <Tours />
      {/* <!-- contact section --> */}
      <Contact />
      {/* <!-- gallery section --> */}
      <Gallery />
      {/* <!-- footer --> */}
      <Footer />
    </>
  )
}

export default App
