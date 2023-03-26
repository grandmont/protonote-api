import { IntegrationProvider } from "@prisma/client";
import { DeleteAccountInput, UpdateDeviceInput } from "../schemas/Account";
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

  async updateDevice(input: UpdateDeviceInput, { req }: Context) {
    try {
      console.log(input);

      const userId = req.user.id;

      if (input.timeZone) {
        console.log("update timezone");
        // Update user timeZone
        await prisma.user.update({
          data: {
            timeZone: input.timeZone,
          },
          where: {
            id: userId,
          },
        });
      }

      if (input.refreshToken) {
        console.log("updaterefresh token");
        // Update spotify refreshToken
        const spotifyIntegration = await prisma.integration.findFirst({
          where: {
            userId: {
              equals: userId,
            },
            provider: {
              equals: IntegrationProvider.SPOTIFY,
            },
          },
        });

        await prisma.integration.update({
          data: {
            refreshToken: input.refreshToken,
          },
          where: {
            id: spotifyIntegration.id,
          },
        });
      }

      return {
        status: true,
      };
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}
