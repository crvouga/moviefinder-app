import type { UserSessionId } from "../../data/user-session-id"
import type { Result } from "../../utils/result"
import type { UserSession } from "../user-session"

export type UserSessionDb = {
    put: (userSession: UserSession) => Promise<Result<string, null>>
    get: (userSessionId: UserSessionId) => Promise<Result<string, UserSession | null>>
}