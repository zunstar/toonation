import { useLayout } from "../../contexts/layouts/LayoutContext"

type HeaderProps = {
  className?: string
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const { title } = useLayout()
  return (
    <header className={className}>
      <h1 className="text-center fs-17px fw-700 px-20px py-12px">{title}</h1>
    </header>
  )
}

export default Header
