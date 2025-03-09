import { get, post } from "@/utils/request";

/**
 * @description 用户注册
 */
export async function UserRegister(user: string, password: string, email: string) {
    return await post<{ data: any; code: number }>({
        url: "/api/users/register",
        data: { user, password, email },
    });
}

/**
 * @description 用户登录
 */
export async function UserLogin(user: string, password: string) {
    return await post<{ data: any; code: number }>({
        url: "/api/users/profile",
        data: { user, password },
    });
}

/**
 * @description 获取用户登录key
 */
export async function UserNonce() {
    return await get<{ data: { nonce: string }; code: number }>({
        url: "/api/users/nonce",
        // data: { user, password },
    });
}
