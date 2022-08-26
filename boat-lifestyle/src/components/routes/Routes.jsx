import { Route, Routes } from "react-router-dom";
import { HomePage } from "../homepage/HomePage";

export function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <UsersPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/users/:id"
          element={
            <PrivateRoute>
              <SingleUserPage />
            </PrivateRoute>
          }
        /> */}
      </Routes>
    </>
  );
}

export default AllRoutes;
