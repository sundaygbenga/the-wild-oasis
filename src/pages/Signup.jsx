import styled from "styled-components";
import Logo from "../ui/Logo";
import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";

const SignupLayout = styled.main`
	min-height: 100vh;
	display: grid;
	grid-template-columns: 48rem;
	align-content: center;
	justify-content: center;
	gap: 3.2rem;
	background-color: var(--color-grey-50);
`;

function Signup() {
	return (
		<SignupLayout>
			<Logo />
			<Heading as="h4">Signup in to your account</Heading>
			<SignupForm />
		</SignupLayout>
	);
}

export default Signup;
