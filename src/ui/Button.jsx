import styled, { css } from "styled-components";

const sizes = {
	small: css`
		font-size: 1.2rem;
		padding: 0.4rem 0.8rem;
		text-transform: uppercase;
		font-weight: 600;
		text-align: center;
	`,
	medium: css`
		font-size: 1.4rem;
		padding: 1.2rem 1.6rem;
		font-weight: 500;
	`,
	large: css`
		font-size: 1.6rem;
		padding: 1.2rem 2.4rem;
		font-weight: 500;
	`,
};

const variations = {
	primary: css`
		color: var(--color-brand-50);
		/* background-color: var(--color-brand-500); */
		background: linear-gradient(to top, #2b32b2, #1488cc);
		transition: background-color 0.9s ease, transform 0.9s ease;

		&:hover {
			/* background: var(--color-brand-700); */
			/* background: rgb(2, 0, 36); */
			background: radial-gradient(
				circle,
				rgba(2, 0, 36, 1) 0%,
				rgba(99, 102, 241, 1) 88%,
				rgba(0, 212, 255, 1) 100%
			);
			transform: scale(1.05);
			/* transform: skew(10deg, 5deg); */
			/* transform: translate(50%); */
		}
	`,
	secondary: css`
		color: var(--color-grey-600);
		background: var(--color-grey-0);
		border: 1px solid var(--color-grey-200);
		transition: background-color 0.9s ease, transform 0.9s ease;

		&:hover {
			background-color: var(--color-grey-50);
			transform: scale(1.05);
		}
	`,
	danger: css`
		color: var(--color-red-100);
		background-color: var(--color-red-700);
		transition: background-color 0.9s ease, transform 0.9s ease;

		&:hover {
			background-color: var(--color-red-800);
			transform: scale(1.05);
		}
	`,
};

const Button = styled.button`
	border: none;
	border-radius: var(--border-radius-sm);
	box-shadow: var(--shadow-sm);

	${(props) => sizes[props.size]}
	${(props) => variations[props.variation]}
`;

Button.defaultProps = {
	variation: "primary",
	size: "medium",
};

export default Button;
