import React, { createContext, useContext, useState, ReactNode } from "react"

type LayoutContextType = {
  title: string
  setTitle: (title: string) => void
  isPaymentPopup: boolean
  setIsPaymentPopup: (isPaymentPopup: boolean) => void
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined)

export const LayoutProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [title, setTitle] = useState<string>("")
  const [isPaymentPopup, setIsPaymentPopup] = useState<boolean>(false)

  return (
    <LayoutContext.Provider
      value={{ title, setTitle, isPaymentPopup, setIsPaymentPopup }}
    >
      {children}
    </LayoutContext.Provider>
  )
}

export const useLayout = (): LayoutContextType => {
  const context = useContext(LayoutContext)
  if (!context) throw new Error("LayoutProvider Error")
  return context
}
