import { useEffect } from "react"
import { useLayout } from "../../../../shared/contexts/layouts/LayoutContext"

const Gift: React.FC = () => {
  const { setTitle } = useLayout()
  useEffect(() => {
    setTitle("문화상품권 충전")
  }, [])
  return (
    <div className="gift-wrapper">
      <section>
        <h2>핀번호 직접 입력</h2>
      </section>
    </div>
  )
}
export default Gift
