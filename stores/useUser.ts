import { defineStore } from "pinia";

export const useUser = defineStore("user", () => {
    const isMobile = ref(false);
    const userInfo = ref({
        username: localStorage.getItem("username") || "",
        password: localStorage.getItem("password") || "",
        expire: localStorage.getItem("expire") || "",
        // token: localStorage.getItem("token") || ""
    });
    return {
        isMobile,
        userInfo
    };
});
