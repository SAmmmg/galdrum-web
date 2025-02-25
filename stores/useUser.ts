import { defineStore } from "pinia";

export const useUser = defineStore("user", () => {
    const userInfo = reactive({
        name: "acs",
        count: 0,
    });
    onMounted(() => {
        setInterval(() => {
            userInfo.count++;
        }, 1000);
    });
    return {
        userInfo,
    };
});
