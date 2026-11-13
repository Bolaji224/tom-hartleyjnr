import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({
  children,
  variant = 'dark',
  to,
  href,
  onClick,
  type = 'button',
  className = '',
  size = 'md',
  ...rest
}) => {
  const classes = `btn btn--${variant} btn--${size} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
