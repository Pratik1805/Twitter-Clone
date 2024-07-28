import Header from "@/Components/Header";
import NotificationsFeed from "@/Components/NotificationsFeed";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context)
 
    if (!session) return { redirect: { destination: "/", permanent: false } }
    return { props: { session } }
 }

const notifications = () => {
  return (
    <>
      <Header label="Notifications" ShowBackArrow />
      <NotificationsFeed/>
    </>
  );
};

export default notifications;
