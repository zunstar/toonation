import React, { useState } from "react"
import "./PaymentPopup.scss"
import { useLayout } from "../../contexts/layouts/LayoutContext"
import { usePayment } from "../../contexts/payment/PaymentContext"
import { useNavigate } from "react-router-dom"

const PaymentPopup: React.FC = () => {
  const { setIsPaymentPopup } = useLayout()
  const { addPaymentType, setPaymentType } = usePayment()
  const navigate = useNavigate()
  const handlePaymentClosePopup = () => {
    setIsPaymentPopup(false)
    document.body.style.overflow = ""
  }

  const handlePaymentCheck = (type: string) => {
    if (type === "gift") {
      navigate("/account/charge/gift")
    } else {
      addPaymentType(type)
    }
    setPaymentType(type)
    handlePaymentClosePopup()
  }

  const paymentOptions = [
    { type: "gift", label: "문화상품권" },
    { type: "naverPay", label: "네이버페이" },
    { type: "kakaoPay", label: "카카오페이" },
    { type: "tossPay", label: "토스페이" },
  ]

  return (
    <div className="payment-popup-wrapper">
      <div className="payment-dim" onClick={handlePaymentClosePopup}></div>
      <section className="payment-content p-20px">
        <h2 className="fs-20px fw-700 pb-10px">결제 수단 변경</h2>
        <div className="payment-scroll py-10px">
          <ul className="d-flex flex-wrap fs-14px gap-14px pb-10px">
            {paymentOptions.map((option) => (
              <li
                key={option.type}
                className="d-flex align-items-center justify-content-center"
                onClick={() => handlePaymentCheck(option.type)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default PaymentPopup
