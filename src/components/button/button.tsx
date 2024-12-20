import "./button.css";

interface ButtonProps {
	text?: string;
	onclick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({ text, onclick }: ButtonProps) {
	return (
		<button onClick={onclick} type="button">
			{text}
		</button>
	);
}

export default Button;
