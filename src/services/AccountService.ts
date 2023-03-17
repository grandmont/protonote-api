import { DeleteAccountInput } from "schemas/Account";
import { Context, prisma } from "../context";

export default class AccountService {
  async deleteAccount(input: DeleteAccountInput, { req }: Context) {
    try {
      if (!input.confirm) {
        return {
          deleted: false,
        };
      }

      const userId = req.user.id;

      // Remove memo description but keep record
      await prisma.proto.updateMany({
        where: { userId },
        data: {
          description: "DELETED",
        },
      });

      await prisma.user.delete({ where: { id: userId } });

      return {
        deleted: true,
      };
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}
