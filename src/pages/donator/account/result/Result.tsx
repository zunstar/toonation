import { useEffect } from "react"
import { useLayout } from "../../../../shared/contexts/layouts/LayoutContext"
import { usePayment } from "../../../../shared/contexts/payment/PaymentContext"

const Result: React.FC = () => {
  const { setTitle } = useLayout()
  const { resultCash } = usePayment()
  useEffect(() => {
    setTitle("충전 결과")
  }, [])
  return (
    <div className="gift-wrapper">
      <section>
        <div>충전 캐시 : {resultCash}</div>
      </section>
    </div>
  )
}
export default Result
