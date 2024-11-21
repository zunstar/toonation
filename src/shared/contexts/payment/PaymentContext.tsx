import React, { createContext, useContext, useState, ReactNode } from "react"

type PaymentContextType = {
  selectedPayments: string[]
  addPaymentType: (type: string) => void
  paymentType: string
  setPaymentType: (type: string) => void
  globalPaymentType: string
  setGlobalPaymentType: (type: string) => void
  resultCash: string
  setResultCash: (type: string) => void
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined)

export const PaymentProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedPayments, setSelectedPayments] = useState<string[]>([])
  const [paymentType, setPaymentType] = useState<string>("")
  const [globalPaymentType, setGlobalPaymentType] = useState<string>("")
  const [resultCash, setResultCash] = useState<string>("")

  const addPaymentType = (type: string) => {
    setSelectedPayments((prev) => {
      const updated = [type, ...prev.filter((item) => item !== type)]
      return [...updated]
    })
  }

  return (
    <PaymentContext.Provider
      value={{
        selectedPayments,
        addPaymentType,
        paymentType,
        setPaymentType,
        globalPaymentType,
        setGlobalPaymentType,
        resultCash,
        setResultCash,
      }}
    >
      {children}
    </PaymentContext.Provider>
  )
}

export const usePayment = (): PaymentContextType => {
  const context = useContext(PaymentContext)
  if (!context) throw new Error("PaymentProvider Error")
  return context
}
