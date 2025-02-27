import { memo } from "react";
import styled, { css } from "styled-components";
import { useSound } from "./tickSound";

const SoundButton = styled.button`
	position: fixed;
	top: 5px;
	right: 5px;
	font-size: 2.5rem;
	border: none;
`;

function ToggleSounds() {
	const { allowSound, setAllowSound } = useSound();
	return (
		<SoundButton
			className="btn-sound"
			onClick={() => setAllowSound((allow) => !allow)}
		>
			{allowSound ? "🔊" : "🔇"}
		</SoundButton>
	);
}

export default memo(ToggleSounds);
