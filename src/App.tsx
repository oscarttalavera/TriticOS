import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import { DashboardView } from "./views/DashboardView";
import { AdminView } from "./views/AdminView";
import { BrandView } from "./views/BrandView";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardView />} />
          <Route path="/admin" element={<AdminView />} />
          <Route path="/brand" element={<BrandView />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
