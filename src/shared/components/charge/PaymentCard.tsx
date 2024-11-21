import { usePayment } from "../../contexts/payment/PaymentContext"
import "./PaymentCard.scss"
type PaymentCardProps = {
  handlePaymentOpenPopup: () => void
}

const PaymentCard: React.FC<PaymentCardProps> = ({
  handlePaymentOpenPopup,
}) => {
  const { selectedPayments, paymentType, setPaymentType } = usePayment() // setPaymentType 추가

  const handleRadioChange = (payment: string) => {
    setPaymentType(payment)
  }

  return (
    <div
      className={`card-wrapper d-flex gap-20px py-20px bg-gray ${
        selectedPayments.length === 0
          ? "justify-content-center align-items-center"
          : "justify-content-start"
      }`}
    >
      {selectedPayments.map((payment, index) => (
        <div
          key={index}
          className={`card text-center d-flex justify-content-center align-items-center ${payment}`}
          onClick={() => handleRadioChange(payment)}
        >
          <input
            type="radio"
            name="paymentType"
            value={payment}
            checked={paymentType === payment}
            onChange={() => handleRadioChange(payment)}
          />
          {payment}
        </div>
      ))}
      <div
        className="card text-center d-flex justify-content-center align-items-center"
        onClick={handlePaymentOpenPopup}
      >
        결제수단 추가
      </div>
    </div>
  )
}
export default PaymentCard
