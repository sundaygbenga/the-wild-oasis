import styled from "styled-components";

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 5rem;
	font-size: 24px;
	font-weight: bolder;
`;

function Empty({ resourceName }) {
	return (
		<StyledDiv>
			<p>OOPS!!! 🤭</p>
			<p>No {resourceName} could be found!</p>
		</StyledDiv>
	);
}

export default Empty;
