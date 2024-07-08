import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "GET") {
    return res.status(405).end();
  }

  try {
    const { userID } = req.query;

    if (!userID || typeof userID != "string") {
      throw new Error("Invalid ID");
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        id: userID,
      },
    });

    const followersCount = await prisma.user.count({
      where: {
        followingIds: {
          has: userID,
        },
      },
    });

    return res.status(200).json({ ...existingUser, followersCount });
  } catch (error) {
    return res.status(400).end();
  }
}
