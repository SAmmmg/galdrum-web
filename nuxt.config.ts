export default defineNuxtConfig({
    // css: ["~/assets/style/index.scss", "@/assets/iconfont/iconfont.css"],
    devtools: { enabled: true },

    modules: ["@nuxtjs/i18n", "@element-plus/nuxt", "@pinia/nuxt", "@nuxtjs/tailwindcss"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: "modern-compiler"
                }
            }
        }
    },
    // nitro: {
    //   prerender: {
    //     ignore: ["/manifest.json"],
    //   },
    // },
    // experimental: {
    //   appManifest: false,
    // },
    delayHydration: {
        // enables nuxt-delay-hydration in dev mode for testing
        debug: process.env.NODE_ENV === "development",
        mode: "mount",
    },

    image: {
        dir: "assets",
    },

    app: {
        // baseUrl: process.env.NODE_ENV === "development" ? "http://localhost:3011" : "https://www.myimg.ai",
        head: {
            meta: [
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
                {
                    name: "yandex-verification",
                    content: "3df52f08bc8ff570",
                },
                {
                    name: "robots",
                    content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
                },
            ],
            link: [
                {
                    rel: "preconnect",
                    href: "https://fonts.googleapis.com",
                },
                // {
                //   rel: "preload",
                //   href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap",
                //   as: "style",
                //   onload: "this.onload=null;this.rel='stylesheet'",
                // },
            ],
            script: [
                {
                    async: true,
                    src: "https://www.googletagmanager.com/gtag/js?id=G-D8KEWVHC0M",
                },
                {
                    type: "text/javascript",
                    innerHTML:
                        " window.dataLayer = window.dataLayer || [];\n" +
                        "  function gtag(){dataLayer.push(arguments);}\n" +
                        "  gtag('js', new Date());\n" +
                        "\n" +
                        "  gtag('config', 'G-D8KEWVHC0M');",
                },
            ],
        },
    },

    i18n: {
        baseUrl: process.env.NODE_ENV === "development" ? "http://localhost:3011" : "https://www.myimg.ai",
        vueI18n: "./i18n.config.ts", // if you are using custom path, default
        defaultLocale: "zh_CN", // 默认语言
        locales: [
            { code: "zh_CN", language: "zh_CN", name: "简体中文" },
            { code: "en", language: "en", name: "English" },
            { code: "id", language: "id", name: "Bahasa Indonesia" },
            { code: "pt", language: "pt", name: "Português" },
            { code: "es", language: "es", name: "Español" },
            { code: "ru", language: "ru", name: "Русский" },
            { code: "ja", language: "ja", name: "日本語" },
            { code: "de", language: "de", name: "Deutsh" },
            { code: "fr", language: "fr", name: "Français" },
            { code: "it", language: "it", name: "Italiano" },
            { code: "ar", language: "ar", name: "عرب" },
            { code: "hi", language: "hi", name: "हिन्दी" },
            { code: "tr", language: "tr", name: "Türkçe" },
            { code: "vi", language: "vi", name: "Tiếng Việt" },
        ],
        strategy: "prefix_except_default", // 路由是否要加入前缀（/zh、/en） 我不需要生成多语言路由 所以设为 no_prefix 其他设置请参考 https://i18n.nuxtjs.org/strategies
        // dynamicRouteParams: true,
        useSetI18nParams: true,
        detectBrowserLanguage: false, //浏览器检测语言
        // langDir: 'i18n/' //延迟加载
    },

    compatibilityDate: "2024-10-26",
});