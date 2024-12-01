declare global {
    namespace NodeJS {
        interface ProcessEnv {
            CONVEX_DEPLOYMENT: string;
            NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: string;
            CLERK_SECRET_KEY: string;
            NEXT_PUBLIC_CONVEX_URL: string;
            NEXT_PUBLIC_CONVEX_DOMAIN: string;
        }
    }
}

export {};