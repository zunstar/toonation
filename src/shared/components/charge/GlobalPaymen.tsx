import { useState } from "react"
import "./GlobalPayment.scss"
import { usePayment } from "../../contexts/payment/PaymentContext"

type GlobalPaymentProps = {
  handlePaymentOpenPopup: () => void
}

const GlobalPayment: React.FC<GlobalPaymentProps> = () => {
  const { globalPaymentType, setGlobalPaymentType } = usePayment()

  const handleItemClick = (type: string) => {
    setGlobalPaymentType(type)
  }

  return (
    <div className="global-payment-wrapper px-20px">
      <ul className="d-flex flex-wrap gap-12px justify-content-center align-items-center">
        <li
          className={`bg-gray text-gray text-center fs-12px d-flex flex-column justify-content-center align-items-center ${
            globalPaymentType === "jcb" && "active"
          }`}
          onClick={() => handleItemClick("jcb")}
        >
          <p className={globalPaymentType === "jcb" ? "active" : ""}>
            신용카드
          </p>
          <p>(VISA/MASTER/JCB)</p>
        </li>
        <li
          className={`bg-gray text-gray text-center fs-12px d-flex flex-column justify-content-center align-items-center ${
            globalPaymentType === "amex" && "active"
          }`}
          onClick={() => handleItemClick("amex")}
        >
          <p className={globalPaymentType === "amex" ? "active" : ""}>
            신용카드
          </p>
          <p>(AMEX)</p>
        </li>
        <li
          className={`bg-gray text-gray text-center fs-12px d-flex flex-column justify-content-center align-items-center ${
            globalPaymentType === "unionpay" && "active"
          }`}
          onClick={() => handleItemClick("unionpay")}
        >
          <p className={globalPaymentType === "unionpay" ? "active" : ""}>
            유니온페이
          </p>
        </li>
        <li
          className={`bg-gray text-gray text-center fs-12px d-flex flex-column justify-content-center align-items-center ${
            globalPaymentType === "master" && "active"
          }`}
          onClick={() => handleItemClick("master")}
        >
          <p className={globalPaymentType === "master" ? "active" : ""}>
            신용카드
          </p>
          <p>(VISA/MASTER)</p>
        </li>
      </ul>
    </div>
  )
}
export default GlobalPayment
