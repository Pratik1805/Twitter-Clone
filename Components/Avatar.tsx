import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";
import { useCallback } from "react";
import Image from "next/image";

interface AvatarProps {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
  userId,
  isLarge,
  hasBorder,
}) => {
  const router = useRouter();
  const { data: fetchedUser } = useUser(userId);

  const onClick = useCallback(
    (event: any) => {
      event.stopPropagation();
      const url = `/users/${userId}`;
      router.push(url);
    },
    [router, userId]
  );

  return (
    <div
      onClick={onClick}
      className={`
        ${hasBorder ? "border-4 border-black" : ""}
        ${isLarge ? "h-32 w-32" : "h-12 w-12"}
        rounded-full
        hover:opacity-90
        transition
        cursor-pointer
        relative
      `}
    >
      <Image
        src={fetchedUser?.profileImage || "/images/placeholder.png"}
        alt="Avatar"
        layout="fill"
        objectFit="cover"
        className="rounded-full bg-gray-200"
      />
    </div>
  );
};

export default Avatar;
