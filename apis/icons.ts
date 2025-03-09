import { get, post } from "@/utils/request";

/**
 * @description 获取定制页所有系统图标
 */
export async function GetIcons() {
    return await get<{ data: any }>({
        url: "/api/icons/system",
        data: "",
    });
}

/**
 * @description 用户上传图标
 */
export async function UserUploadIcon(form: FormData) {
    return await post<{ data: any }>({
        url: "/api/icons/upload",
        data: form,
    });
}

/**
 * @description 获取用户上传图标
 */
export async function GetUserIcon(userId: number) {
    return await post<{ data: any }>({
        url: `/api/icons/user/${userId}`,
        data: "",
    });
}
