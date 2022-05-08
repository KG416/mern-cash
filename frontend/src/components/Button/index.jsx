import styles from './Button.module.scss'

function Button({
  as: Component = 'button',
  children,
  onButtonClick = () => {},
  variant = 'primary',
  ...otherProps
}) {

  return (
    <Component
      onClick={onButtonClick}
      className={`${styles.button} ${styles[variant]}`}
      {...otherProps}
    >
      {children}
    </Component>
  )
}

export default Button
