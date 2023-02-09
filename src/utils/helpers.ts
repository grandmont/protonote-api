import { IntegrationProvider } from "@generated/type-graphql"
import { getSpotifyUserInfo } from "./spotify"

export const getIntegrationProvider = (provider: IntegrationProvider) => {
    if (provider === IntegrationProvider.SPOTIFY) {
        return getSpotifyUserInfo
    }

    return () => null
}