import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useSound } from "../../sound/tickSound";

export function useDeleteBooking() {
	//Accessing query client to call queries
	const queryClient = useQueryClient();
	const { deleteSound } = useSound();

	// Mutations
	const { isPending: isDeleting, mutate: deleteBooking } = useMutation({
		mutationFn: deleteBookingApi,
		onSuccess: () => {
			toast.success("Booking deleted successfully");
			deleteSound();
			queryClient.invalidateQueries({
				queryKey: ["bookings"],
			});
		},
		onError: (err) => toast.error(err.message),
	});

	return { isDeleting, deleteBooking };
}
