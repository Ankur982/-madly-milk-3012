import { Route, Routes } from "react-router-dom";
import { BoatDay } from "../BoatDay";
import Cart from "../Cart";
import { Errors } from "../Error";
import { Footer } from "../Footer";
import { HomePage } from "../homepage/HomePage";
import { Login } from "../Login";
import { Navbar } from "../navbar/Navbar";
import { OffersZone } from "../OffersZone";
import { Payment } from "../Payment";
import { ProductItemsPage } from "../ProductItemsPage/ProductCollection";
import ProductPage from "../ProductPage/ProductPage";
import { Register } from "../Register";

export function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/pages/boat-day"
          element={
            <>
              <Navbar />
              <BoatDay />
              <Footer />
            </>
          }
        ></Route>

        <Route
          path="/pages/offer-zone"
          element={
            <>
              <Navbar />
              <OffersZone />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/account/login"
          element={
            <>
              <Navbar />
              <Login />
              <Footer />
            </>
          }
        />
        <Route
          path="/account/register"
          element={
            <>
              <Navbar />
              <Register />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/productitemspage"
          element={
            <>
              <Navbar />
              <ProductItemsPage />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/products/:productName"
          element={
            <>
              <Navbar />
              <ProductPage />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/coupon"
          element={
            <>
              <Navbar />
              <Errors />
              <Footer />
            </>
          }
        ></Route>

        <Route
          path="/cart"
          element={
            <>
              <Navbar />
              <Cart />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/payment"
          element={
            <>
              <Navbar />
              <Payment />
              <Navbar />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default AllRoutes;
