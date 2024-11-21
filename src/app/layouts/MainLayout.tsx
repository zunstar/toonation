import { FC, ReactNode } from "react"
import PaymentPopup from "../../shared/components/popup/PaymentPopup"
import { useLayout } from "../../shared/contexts/layouts/LayoutContext"
import Header from "../../shared/components/header/Header"

type MainLayoutProps = {
  children: ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const { isPaymentPopup } = useLayout()
  return (
    <div className="default-layout m-auto h-100">
      <Header className="w-100" />
      <main>{children}</main>
      {isPaymentPopup && <PaymentPopup />}
    </div>
  )
}

export default MainLayout
