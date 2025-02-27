import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useSound } from "../../sound/tickSound";

export function useCheckout() {
	const queryClient = useQueryClient();
	const { playSound } = useSound();

	const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
		mutationFn: (bookingId) =>
			updateBooking(bookingId, {
				status: "checked-out",
			}),

		onSuccess: (data) => {
			playSound();
			toast.success(`Booking #${data.id} successfuly checked out`);
			queryClient.invalidateQueries({ active: true });
		},

		onError: () => toast.errror("There was an error while checking in"),
	});

	return { checkout, isCheckingOut };
}
