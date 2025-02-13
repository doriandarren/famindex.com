import classNames from "classnames";

export const Button = ({children, type="button", variant="primary", onClick, className, disabled}) => {
  return (
    <button
        type={type}
        className={classNames("btn", `btn--${variant}`, className, { "btn--disabled": disabled })}
        onClick={onClick}
        disabled={disabled}
    >
        {children}
    </button>
  )
}
