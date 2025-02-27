import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";
import { useSound } from "../../sound/tickSound";

export function useDeleteCabin() {
	//Accessing query client to call queries
	const queryClient = useQueryClient();
	const { deleteSound } = useSound();

	// Mutations
	const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
		mutationFn: deleteCabinApi,
		onSuccess: () => {
			toast.success("Cabin deleted successfully");

			deleteSound();
			queryClient.invalidateQueries({
				queryKey: ["cabins"],
			});
		},
		onError: (err) => toast.error(err.message),
	});

	return { isDeleting, deleteCabin };
}
