import { ButtonProps } from './types';
import './button.css';

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
