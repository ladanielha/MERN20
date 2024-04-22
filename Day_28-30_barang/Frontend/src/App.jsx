import "./App.css";
import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import OutletPage from "./outlets/OutletPage";
import ProductCreate from "./pages/product/ProductCreate";
import ProductDetail from "./pages/product/ProductDetail";
import ProductList from "./pages/product/ProductList";
import "bootstrap/dist/css/bootstrap.min.css";
import { ContextApplication } from "./libs/config/contexts";
import useLoading from "./libs/hooks/useLoading";
import CustomerList from "./pages/customer/CustomerList";
import CustomerCreate from "./pages/customer/CustomerCreate";
import CustomerDetail from "./pages/customer/CustomerDetail";
import OrderList from "./pages/order/OrderList";
import OrderCreate from "./pages/order/OrderCreate";
import PageOrderDetail from "./pages/order/OrderDetail";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const loading = useLoading();

  return (
    <ContextApplication.Provider
      value={{ isAuthenticated, setIsAuthenticated, loading }}
    >
      <HashRouter>
        <Routes>
          <Route path="/" element={<OutletPage />}>
            <Route index={true} element={<ProductList />} />
            <Route path="create" element={<ProductCreate />} />
            <Route path="detail" element={<ProductDetail />} />
          </Route>
          <Route path="/customer" element={<OutletPage />}>
            <Route path="" element={<CustomerList />}>
              <Route index element={<CustomerCreate />} />
              <Route path={"detail"} element={<CustomerDetail />} />
            </Route>
          </Route>
          <Route path="/order" element={<OutletPage />}>
            <Route index={true} element={<OrderList />} />
            <Route path={"create"} element={<OrderCreate />} />
            <Route path={"detail"} element={<PageOrderDetail/>} />
          </Route>
        </Routes>
      </HashRouter>
    </ContextApplication.Provider>
  );
}

export default App;
