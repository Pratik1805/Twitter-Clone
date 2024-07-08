import use_Users from "@/hooks/use_Users";
import useUsers from "@/hooks/useUsers";
import { useRouter } from "next/router";
import { useCallback } from "react";
import Image from "next/image";
interface AvatarProps {
    userId: string;
    isLarge ?: boolean;
    hasBorder ?: boolean;
}



const Avatar: React.FC<AvatarProps> = ({
    userId,
    isLarge,
    hasBorder
}) => {
    const router = useRouter();
    const { data: fetchedUser} = use_Users( userId );

    const onclick = useCallback((event: any) => {
        event.stopPropagation();


        const url = `/users/${userId}`;

        router.push(url);
    },[router,userId]);

    return (
        <div className={`
            ${hasBorder ? 'border-4 border-black' : ''}
            ${isLarge ? 'h-32' : 'h-12'}
            ${isLarge ? 'w-32' : 'w-12'}
            rounded-full
            hover:opacity-90
            transition
            cursor-pointer
            relaitve
        `}>
            <Image 
                width={52}
                height={32}
                style={{
                    objectFit: 'cover',
                    borderRadius: '100%',
                    backgroundColor: 'white'
                }}
                alt="Avatar"
                onClick={onclick}
                layout="fixed"

                src={fetchedUser?.profileImage || '/images/placeholder.png'}
            />
        </div>
    );
}

export default Avatar