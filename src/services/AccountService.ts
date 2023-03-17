import { Context, prisma } from "../context";

export default class AccountService {
  async deleteAccount({ req }: Context) {
    try {
      const userId = req.user.id;

      // Remove memo description but keep record
      await prisma.proto.updateMany({
        where: { userId },
        data: {
          description: "DELETED",
        },
      });

      const user = await prisma.user.delete({ where: { id: userId } });

      return {
        user,
        deleted: true,
      };
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}
