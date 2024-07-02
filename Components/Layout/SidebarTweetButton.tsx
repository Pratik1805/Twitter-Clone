import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { FaFeather } from "react-icons/fa";

const SidebarTweetButton = () => {
    const router = useRouter();
    const logInModal = useLoginModal();

    const onClick = useCallback(() => {
      logInModal.onOpen();
    },[logInModal]);

  return (
    <div onClick={onClick}>
        <div className=" mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center bg-sky-500 hover:bg-opacity-80 transition cursor-pointer">
            <FaFeather size={24} color="white"/>
        </div>

        <div className=" mt-6 hidden lg:block rounded-full px-4 py-4  bg-sky-500 hover:bg-opacity-80 transition cursor-pointer">
            <p className=" hidden lg:block text-center font-semibold text-white text-[20px]">Tweet</p>
        </div>

    </div>
  );
};

export default SidebarTweetButton;
