import { tesloApi } from "@/api/tesloApi"
import type { AuthResponse } from "../intrefaces/auth.response"

export const loginAction = async (email: string, password: string): Promise<AuthResponse> => {
    try {
        const { data } = await tesloApi.post<AuthResponse>('/auth/login', {
            email,
            password
        })

        return data
    } catch (error) {
        console.log("🚀 ~ loginAction ~ error:", error)
        throw error
    }
}