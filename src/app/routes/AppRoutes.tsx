import React, { lazy, Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import Gift from "../../pages/donator/account/gift/Gift"
import Result from "../../pages/donator/account/result/Result"

const Charge = lazy(() => import("../../pages/donator/account/charge/Charge"))

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Navigate to="/account/charge" />} />
        <Route path="/account/charge" element={<Charge />} />
        <Route path="/account/charge/gift" element={<Gift />} />
        <Route path="/account/charge/result" element={<Result />} />
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
