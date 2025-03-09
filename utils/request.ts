// 请求配置
interface options {
    url: string;
    data?: any;
    headers?: HeadersInit;
}
interface requstOptions extends options {
    method: "GET" | "POST" | "PUT" | "DELETE";
}
const baseURL = import.meta.env.VITE_BASE_URL;
// const baseURL = "";
// console.log("baseURL", baseURL);

async function request<T>({ method, url, data, headers }: requstOptions): Promise<T> {
    let params = {};
    let query = {};
    let body: object | undefined = {};
    if (method === "GET" || method === "DELETE") {
        query = data;
        body = undefined;
    } else if (method === "POST" || method === "PUT") {
        body = data;
    } else {
        new Error("请求类型错误");
        return Promise.reject();
    }

    let token = sessionStorage.getItem("userInfo") || "";
    try {
        if (typeof token == "string" && token) {
            token = JSON.parse(token).userInfo.token;
        } else {
            token = "";
        }
    } catch (error) {
        token = "";
    }

    const createFetchRequst = $fetch.create({
        baseURL,
        method,
        params,
        query,
        body,
        headers,
        onRequest({ request, response, options }) {
            // 请求拦截
        },
        onRequestError({ request, response, options }) {
            // 请求失败拦截
            ElMessage.error("请求失败！");
        },
        onResponse({ request, response, options }) {
            // 响应拦截
            const {
                status,
                _data: { code, msg, data },
            } = response;

            if (status >= 500) {
                ElMessage.error(`code：${status}，服务器发生错误！`);
                throw {
                    request,
                    response,
                };
            }
        },
        onResponseError({ request, response, options }) {
            // 响应失败拦截
            ElMessage.error("服务器无法响应！");
        },
    });

    return createFetchRequst(url);
}

export async function get<T>({ url, data, headers }: options) {
    return await request<T>({ method: "GET", url, data, headers });
}

export async function post<T>({ url, data, headers }: options) {
    return await request<T>({ method: "POST", url, data, headers });
}

export async function del<T>({ url, data, headers }: options) {
    return await request<T>({ method: "DELETE", url, data, headers });
}

export async function put<T>({ url, data, headers }: options) {
    return await request<T>({ method: "PUT", url, data, headers });
}
