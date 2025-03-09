import { defineStore } from "pinia";

export const useUser = defineStore("user", () => {
    const isMobile = ref(false);
    const userInfo = ref({
        username: "",
        password: "",
        expire: "",
    });

    onMounted(() => {
        Object.assign(userInfo, {
            username: localStorage.getItem("username") || "",
            password: localStorage.getItem("password") || "",
            expire: localStorage.getItem("expire") || "",
        });
    });
    return {
        isMobile,
        userInfo,
    };
});
