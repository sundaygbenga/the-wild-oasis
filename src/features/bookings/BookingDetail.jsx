import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./useBooking";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";
import { useCheckout } from "../check-in-out/useCheckout";
import { HiArrowUpOnSquare, HiTrash } from "react-icons/hi2";
import { useDeleteBooking } from "./useDeleteBooking";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Empty from "../../ui/Empty";

const HeadingGroup = styled.div`
	display: flex;
	gap: 2.4rem;
	align-items: center;
`;

function BookingDetail() {
	const { booking, isPending } = useBooking();
	const { checkout, isCheckingOut } = useCheckout();
	const { deleteBooking, isDeleting } = useDeleteBooking();

	const moveBack = useMoveBack();
	const navigate = useNavigate();

	if (isPending) return <Spinner />;
	if (!booking) return <Empty resourceName="booking" />;

	const statusToTagName = {
		unconfirmed: "blue",
		"checked-in": "green",
		"checked-out": "silver",
	};

	return (
		<>
			<Row type="horizontal">
				<HeadingGroup>
					<Heading as="h1">Booking #{booking?.id}</Heading>
					<Tag type={statusToTagName[booking?.status]}>
						{booking?.status.replace("-", " ")}
					</Tag>
				</HeadingGroup>
				<ButtonText onClick={moveBack}>&larr; Back</ButtonText>
			</Row>

			<BookingDataBox booking={booking} />

			<ButtonGroup>
				{booking?.status === "unconfirmed" && (
					<Button onClick={() => navigate(`/checkin/${booking?.id}`)}>
						Check In
					</Button>
				)}
				{booking?.status === "checked-in" && (
					<Button
						icon={<HiArrowUpOnSquare />}
						onClick={() => checkout(booking?.id)}
						disabled={isCheckingOut}
					>
						Check out
					</Button>
				)}
				<Modal>
					<Modal.Open opens="delete">
						<Button variation="danger" icon={<HiTrash />}>
							Delete
						</Button>
					</Modal.Open>
					<Modal.Window name="delete">
						<ConfirmDelete
							resourceName="bookings"
							disabled={isDeleting}
							onConfirm={() =>
								deleteBooking(booking?.id, {
									onSettled: () => navigate(-1),
								})
							}
						/>
					</Modal.Window>
				</Modal>

				<Button variation="secondary" onClick={moveBack}>
					Back
				</Button>
			</ButtonGroup>
		</>
	);
}

export default BookingDetail;
