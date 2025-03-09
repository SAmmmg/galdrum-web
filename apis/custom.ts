import { get, post } from "@/utils/request";

/**
 * @description 创建定制数据
 */
export async function CreateCustom(data: any) {
    return await post<{ data: any }>({
        url: "/api/customs",
        data,
    });
}

/**
 * @description 上传定制图片
 */
export async function UploadCustom(form: FormData) {
    return await post<{ data: any }>({
        url: "/api/customs/upload",
        data: form,
    });
}
