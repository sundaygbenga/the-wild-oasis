import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useSound } from "../../sound/tickSound";

export function useCheckin() {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const { playSound } = useSound();

	const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
		mutationFn: ({ bookingId, breakfast }) =>
			updateBooking(bookingId, {
				status: "checked-in",
				isPaid: true,
				...breakfast,
			}),

		onSuccess: (data) => {
			playSound();
			toast.success(`Booking #${data.id} successfuly checked in`);
			queryClient.invalidateQueries({ active: true });
			navigate("/");
		},

		onError: () => toast.errror("There was an error while checking in"),
	});

	return { checkin, isCheckingIn };
}
