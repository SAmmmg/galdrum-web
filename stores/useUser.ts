import { defineStore } from "pinia";

export const useUser = defineStore("user", () => {
    const isMobile = ref(false);
    return {
        isMobile,
    };
});
