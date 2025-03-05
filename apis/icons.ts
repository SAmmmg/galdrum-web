import { get, post } from "@/utils/request";

/**
 * @description 获取定制页所有系统图标
 */
export async function GetIcons() {
    return await get<{ data: any }>({
        url: "/api/icons",
        data: "",
    });
}
