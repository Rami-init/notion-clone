'use client'

interface ButtonProps {
  children: JSX.Element
  className?: string
}

function Button({ children, className }: ButtonProps) {
  return (
    <button className={className} onClick={() => {}} type="button">
      {children}
    </button>
  )
}
export default Button
