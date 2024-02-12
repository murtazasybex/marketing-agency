//react router dom
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import {
  Banner,
  BestSeller,
  BuildBrand,
  CTAOne,
  CTAThree,
  CTATwo,
  Categories,
  Footer,
  Header,
  Info,
  OnSale,
  SocialmediaPost,
  Testimonials,
  Value,
} from "./components";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        {/* <Route index element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/myprojects" element={<Projects />} />
        <Route path="/cart" element={<Cart />} /> */}
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

const Root = () => {
  return (
    <>
      <Header />
      <Banner />
      <Categories />
      <Value />
      <BestSeller />
      <OnSale />
      <CTAOne />
      <BuildBrand />
      <SocialmediaPost />
      <CTATwo />
      <Testimonials />
      <CTAThree />
      <Info />
      <Footer />
    </>
  );
};
