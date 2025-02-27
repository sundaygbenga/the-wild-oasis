// import correctSound from "../sound/correct-sound.mp3";
import { useState } from "react";
// import clickSound from "./ClickSound.mp3";
import clickSound from "./correct-sound.mp3";
import deletedSound from "./warning.wav";

export function useSound() {
	const [allowSound, setAllowSound] = useState(true);

	function playSound() {
		const PlaySound = new Audio(clickSound);
		PlaySound.play();
	}
	function deleteSound() {
		const DeleteSound = new Audio(deletedSound);
		DeleteSound.play();
	}

	return { playSound, deleteSound, allowSound, setAllowSound };
}

// useEffect(
//   function () {
//     const playSound = function () {
//       if (!allowSound) return;
//       const sound = new Audio(clickSound);
//       sound.play();
//     };

//     playSound();
//   },
//   [duration, allowSound]
// );
