import { IconButton } from "shared/components/IconButton";
import { Modal } from "shared/components/Modal";
import Typograph from "shared/components/Typograph";
import { ModalBody, ModalHeader } from "./ReactionModal.styled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { InfoCard } from "feature/Detailed/components/InfoCard";
import { useSelector } from "shared/hooks";
import { stateReactionUsers } from "shared/store/slices/comment/commentSlices";

export const ReactionModal = ({ isOpen, onOpenClose }) => {
  const users = useSelector(stateReactionUsers);

  return (
    <Modal isOpen={isOpen} close={onOpenClose}>
      <ModalHeader>
        <Typograph font="25" color="whiteGray">
          Bəyənənlər
          <IconButton
            color="green"
            content={users?.length}
            size="22"
            font="18"
            margin="0 10px"
          >
            <FavoriteIcon />
          </IconButton>
        </Typograph>
      </ModalHeader>
      <ModalBody>
        {users?.map(
          ({ id, user_info: { first_name, image, last_name, email } }) => (
            <InfoCard
              key={`user-reaction-id-${id}`}
              name={first_name}
              surname={last_name}
              email={email}
              image={image}
              size="xl"
            />
          )
        )}
      </ModalBody>
    </Modal>
  );
};
