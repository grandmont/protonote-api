import { IntegrationProvider } from "../generated"
import { getSpotifyUserInfo } from "./spotify"

export const getIntegrationProvider = (provider: IntegrationProvider) => {
    if (provider === IntegrationProvider.SPOTIFY) {
        return getSpotifyUserInfo
    }

    return () => null
}