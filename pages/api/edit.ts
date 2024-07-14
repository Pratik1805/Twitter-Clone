import { NextApiRequest, NextApiResponse } from "next"

import serverAuth from "@/libs/serverAuth"
import prisma from "@/libs/prismadb"

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
   if (request.method !== "PATCH") return response.status(405).end()

   try {
      const currentUser = await serverAuth(request, response)
      const { name, username, bio, profileImage, coverImage } = request.body

      if (!name || !username) throw new Error("Missing fields")

      const updatedUser = await prisma.user.update({
         where: { id: currentUser.id },
         data: { name, username, bio, profileImage, coverImage },
      })

      return response.status(200).json(updatedUser)
   } catch (error) {
      console.log(error)
      return response.status(400).end()
   }
}