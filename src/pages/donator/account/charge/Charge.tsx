import React, { useEffect, useState } from "react"
import "./Charge.scss"
import { useLayout } from "../../../../shared/contexts/layouts/LayoutContext"
import PaymentCard from "../../../../shared/components/charge/PaymentCard"
import GlobalPayment from "../../../../shared/components/charge/GlobalPaymen"
import { usePayment } from "../../../../shared/contexts/payment/PaymentContext"
import { useNavigate } from "react-router-dom"

const Charge: React.FC = () => {
  const navigate = useNavigate()
  const { setIsPaymentPopup, setTitle } = useLayout()
  const { setResultCash } = usePayment()
  const [cash, setCash] = useState<number>(0)
  const [isTabActive, setIsTabActive] = useState<number>(0)
  const [isActive, setIsActive] = useState<boolean>(false)
  const [paymentMethod, setPaymentMethod] = useState<string>("local")

  useEffect(() => {
    setTitle("충전하기")
  }, [])
  const handleAddAmount = (amount: number) => {
    setCash((prevCash) => prevCash + amount)
  }

  const handleReset = () => {
    setCash(0)
  }

  const formatCashNumber = (value: number): string => {
    return value.toLocaleString()
  }

  const formatCashVAT = (totalAmount: number) => {
    const totalWithVAT = totalAmount * 1.1
    return formatCashNumber(totalWithVAT)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.replace(/,/g, "")
    const numericValue = parseInt(inputValue, 10)

    if (!isNaN(numericValue)) {
      setCash(numericValue)
    } else if (inputValue === "") {
      setCash(0)
    }
  }

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value)
  }

  const handlePaymentOpenPopup = () => {
    setIsPaymentPopup(true)
    document.body.style.overflow = "hidden" // body 스크롤 비활성화
  }

  const handleChargeResult = () => {
    if (cash === 0) {
      return alert("충전 금액을 입력해주세요.")
    }
    setResultCash(formatCashVAT(cash))
    navigate("/account/charge/result")
  }

  return (
    <div className="w-100 charge-wrapper">
      <ul className="d-flex flex-row justify-content-evenly align-items-center w-100 bg-gray">
        {["캐시충전", "자동충전", "노래방충전"].map((item, index) => (
          <li
            key={index}
            className={`tab flex-1 text-center fs-17px py-14px ${
              isTabActive === index ? `active fw-700 text-black` : " text-gray"
            }`}
            onClick={() => setIsTabActive(index)}
          >
            {item}
          </li>
        ))}
      </ul>
      <section className="w-100 p-20px d-flex flex-column gap-8px">
        <h2 className="fw-700 fs-17px">충전금액</h2>
        <div className="content">
          <div
            className={`cash-input d-flex flex-row gap-8px py-6px px-12px align-items-center ${
              isActive ? "active" : ""
            }`}
          >
            <input
              type="text"
              className="flex-8"
              name="cash"
              value={formatCashNumber(cash)}
              onChange={handleInputChange}
              onFocus={() => setIsActive(true)}
              onBlur={() => setIsActive(false)}
            />
            <button className="flex-1" onClick={handleReset}>
              x
            </button>
            <strong className="flex-1">캐시</strong>
          </div>
        </div>
        <div className="cash-button d-flex flex-row gap-8px">
          <button
            className="flex-1 py-12px fs-15px lh-15px bg-gray"
            onClick={() => handleAddAmount(1000)}
          >
            <span className="text-primary">+</span> 1000
          </button>
          <button
            className="flex-1 py-12px fs-15px lh-15px bg-gray"
            onClick={() => handleAddAmount(10000)}
          >
            <span className="text-primary">+</span> 10000
          </button>
          <button
            className="flex-1 py-12px fs-15px lh-15px bg-gray"
            onClick={() => handleAddAmount(50000)}
          >
            <span className="text-primary">+</span> 50000
          </button>
        </div>
        <p className="text-gray fs-13px">
          충전 금액은 1,000 캐시 단위로만 결제 가능합니다.
        </p>
      </section>
      <section className="py-20px">
        <div className="d-flex flex-row justify-content-between align-items-center px-20px">
          <h2 className="fw-700 fs-17px">결제 수단</h2>
          <h3
            className="fw-600 fs-15px payment-change py-8px px-12px"
            onClick={handlePaymentOpenPopup}
          >
            결제 수단 변경
          </h3>
        </div>
        <div className="d-flex flex-column">
          <label className="local-payment py-10px px-20px">
            <input
              type="radio"
              name="paymentContry"
              value="local"
              checked={paymentMethod === "local"}
              onChange={handlePaymentChange}
              className="me-4px"
            />
            <span className="fs-15px fw-700">국내 결제</span>
          </label>
          {paymentMethod === "local" && (
            <PaymentCard handlePaymentOpenPopup={handlePaymentOpenPopup} />
          )}
          <label className="global-payment py-10px px-20px">
            <input
              type="radio"
              name="paymentContry"
              value="global"
              checked={paymentMethod === "global"}
              onChange={handlePaymentChange}
              className="me-4px"
            />
            <span className="fs-15px fw-700">해외 결제</span>
          </label>
          {paymentMethod === "global" && (
            <GlobalPayment handlePaymentOpenPopup={handlePaymentOpenPopup} />
          )}
        </div>
      </section>
      <section className="p-20px">
        <div className="d-flex flex-roww justify-content-between align-items-center">
          <h2 className="fw-700 fs-17px">최종 결제 금액</h2>
          <h3 className="fw-700 fs-20px">{formatCashVAT(cash)} 원</h3>
        </div>
        <div className="pt-12px">
          <p className="fw-500 fs-13px text-gray">
            * 캐시 유효기간: 마지막 사용일로부터 5년
            <br />* 결제 금액에는 모든 세금이 포함되어 있습니다.
            <br />* 만 19세 미만 미성년자 회원은 법정대리인 동의가 필요하며,
            동의가 완료 된 후 캐시 충전 서비스 이용이 가능합니다.
          </p>
        </div>
        <div className="pt-20px">
          <button
            className="payment-charge w-100 fw-700 fs-17px text-center p-16px lh-16px"
            onClick={handleChargeResult}
          >
            충전하기
          </button>
        </div>
      </section>
    </div>
  )
}

export default Charge
