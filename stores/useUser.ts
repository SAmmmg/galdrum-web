import { defineStore } from "pinia";

export const useUser = defineStore("user", () => {
    const isMobile = ref(false);
    // const userInfo = ref({
    //     username: "",
    //     password: "",
    //     expire: "",
    // });
    const userData = reactive<any>({});

    // onServerPrefetch(async () => {
    //     let u = localStorage.getItem("userData") || "";
    //     if (u) {
    //         Object.assign(userData, JSON.parse(u));
    //     }
    // });

    // onMounted(() => {
    // Object.assign(userInfo, {
    //     username: localStorage.getItem("username") || "",
    //     password: localStorage.getItem("password") || "",
    //     expire: localStorage.getItem("expire") || "",
    // });
    // let u = localStorage.getItem("userData") || "";
    // if (u) {
    //     Object.assign(userData, JSON.parse(u));
    // }
    // });
    return {
        isMobile,
        userData,
    };
});
