import styled from "styled-components";
import Logo from "../ui/Logo";
import MainNav from "../ui/MainNav";
// import Uploader from "../data/Uploader";

const StyledSidbar = styled.aside`
	background-color: var(--color-grey-0);
	padding: 3.2rem 2rem;
	border-right: 1px solid var(--color-grey-100);

	grid-row: 1 / -1;
	display: flex;
	flex-direction: column;
	gap: 3.2rem;
`;

const StyledScroll = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 24px;
	height: 100%;
	overflow-y: auto;
	padding-bottom: 24px;
`;

function Sidebar() {
	return (
		<StyledSidbar>
			<Logo />
			<StyledScroll>
				<MainNav />
				{/* <Uploader /> */}
			</StyledScroll>
		</StyledSidbar>
	);
}

export default Sidebar;
