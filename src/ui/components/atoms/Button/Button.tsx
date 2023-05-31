import { ButtonHTMLAttributes, ReactNode } from 'react';
import './button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	onClick?: () => unknown;
	children: ReactNode;
}

export const Button = ({
	className = '',
	onClick,
	children,
	...otherProps
}: ButtonProps): JSX.Element => {
	return (
		<button
			className={`rmt-button ${className}`}
			onClick={onClick}
			{...otherProps}
		>
			{children}
		</button>
	);
};
