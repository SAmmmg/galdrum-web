export default defineNuxtRouteMiddleware((to, from) => {
    nextTick(() => {
        const { userData } = toRefs(useUser());
    });
});
