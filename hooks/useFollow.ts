import axios from "axios";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";

import useCurrentUser from "./useCurrentUser";
import useLoginModal from "./useLoginModal";
import useUser from "./useUser";

export default function useFollow(userId: string) {
  const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
  const { mutate: mutateFetchedUser } = useUser(userId);

  const loginModal = useLoginModal();

  const isFollowing = useMemo(() => {
    const list = currentUser?.followingIds || [];

    return list.includes(userId);
  }, [currentUser, userId]);

  const toggleFollow = useCallback(async () => {
    if (!currentUser) return loginModal.onOpen();

    try {
      let request;
      let message;

      if (isFollowing) {
        request = () => axios.delete("/api/follow", { data: { userId } });
        message = "Unfollowed 🥺";
      } else {
        request = () => axios.post("/api/follow", { userId });
        message = "Following 🥳";
      }

      await request();
      mutateCurrentUser();
      mutateFetchedUser();

      toast.success(message as string);
    } catch (error) {
      toast.error("Something went wrong");
    }
  }, [
    currentUser,
    isFollowing,
    userId,
    mutateCurrentUser,
    mutateFetchedUser,
    loginModal,
  ]);

  return { isFollowing, toggleFollow };
}
