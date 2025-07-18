// src/components/Button.jsx
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) => {
  const baseClasses = 'btn'; // You can define this base class in your Tailwind or CSS
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    danger: 'btn-danger',
    // add more as needed
  };

  const sizeClasses = {
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg',
  };

  const disabledClass = disabled ? 'btn-disabled' : '';

  const allClasses = classNames(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabledClass,
    className
  );

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={allClasses}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
};

export default Button;
