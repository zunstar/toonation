import { BrowserRouter } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import AppRoutes from "./routes/AppRoutes"
import { LayoutProvider } from "../shared/contexts/layouts/LayoutContext"
import { PaymentProvider } from "../shared/contexts/payment/PaymentContext"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <LayoutProvider>
        <PaymentProvider>
          <MainLayout>
            <AppRoutes />
          </MainLayout>
        </PaymentProvider>
      </LayoutProvider>
    </BrowserRouter>
  )
}

export default App
