import styled from "styled-components";

const FileInput = styled.input.attrs({ type: "file" })`
	font-size: 1.4rem;
	border-radius: var(--border-radius-sm);

	&::file-selector-button {
		font: inherit;
		font-weight: 500;
		padding: 0.8rem 1.2rem;
		margin-right: 1.2rem;
		border-radius: var(--border-radius-sm);
		border: none;
		color: var(--color-brand-50);
		/* background-color: var(--color-brand-600); */
		background: linear-gradient(to top, #2b32b2, #1488cc);
		cursor: pointer;
		/* transition: color 0.2s, background-color 0.2s; */
		transition: background-color 0.9s ease, transform 0.9s ease;

		&:hover {
			/* background-color: var(--color-brand-700); */
			background: radial-gradient(
				circle,
				rgba(2, 0, 36, 1) 0%,
				rgba(99, 102, 241, 1) 88%,
				rgba(0, 212, 255, 1) 100%
			);
			transform: scale(1.05);
		}
	}
`;

export default FileInput;
