import Header from "@/Components/Header";
import UserBio from "@/Components/users/UserBio";
import UserHero from "@/Components/users/UserHero";
import use_Users from "@/hooks/useUser";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

const UserView = () => {
  const router = useRouter();
  const { userId } = router.query;

  const { data: fetchedUser, isLoading } = useUser(userId as string);

  if (isLoading || !fetchedUser) {
    return(
        <div className=" flex justify-center items-center h-full">
            <ClipLoader color="Lightblue" size={80}/>
        </div>
    );
  }
  return (
    <>
      <Header label={fetchedUser?.name} ShowBackArrow />
      <UserHero userId = {userId as string}/>
      <UserBio  userId = {userId as string}/>
    </>
  );
};

export default UserView;
