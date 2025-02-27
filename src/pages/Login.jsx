import styled from "styled-components";
import Logo from "../ui/Logo";
import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/Heading";
import DarkModeToggle from "../ui/DarkModeToggle";

const LoginLayout = styled.main`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* display: grid;
	grid-template-columns: 48rem;
	align-content: center;
	justify-content: center;
	gap: 3.2rem; */
	background-color: var(--color-grey-50);
`;

const ToggleContainer = styled.div`
	position: absolute;
	top: 2rem;
	right: 3rem;
`;

const SectionInterface = styled.div`
	display: grid;
	grid-template-columns: 48rem;
	align-content: center;
	justify-content: center;
	padding: 2rem 0;
	gap: 3.2rem;
	background-color: var(--color-grey-0);
	border: 1px solid var(--color-grey-100);
	border-radius: var(--border-radius-md);
	border-radius: 0px 35px 0px 25px;
`;

function Login() {
	return (
		<LoginLayout>
			<ToggleContainer>
				<DarkModeToggle />
			</ToggleContainer>
			<SectionInterface>
				<Logo />
				<Heading as="h4">Log in to your account</Heading>
				<LoginForm />
			</SectionInterface>
		</LoginLayout>
	);
}

export default Login;
