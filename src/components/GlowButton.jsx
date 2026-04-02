import './GlowButton.css'

export default function GlowButton({
  children,
  variant = 'primary',  // 'primary' | 'secondary' | 'ghost'
  href,
  onClick,
  target,
  rel,
  className = '',
  download,
  ...props
}) {
  const cls = `glow-btn glow-btn--${variant} ${className}`

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        target={target}
        rel={rel}
        download={download}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={cls} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
