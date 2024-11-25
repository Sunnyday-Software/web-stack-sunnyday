declare namespace NodeJS {
    export interface ProcessEnv {
        readonly DB_URL?: string;
        readonly DB_SEED?: string;
        readonly S3_ACCESS_KEY_ID?: string;
        readonly S3_ACCESS_KEY_SECRET?: string;
        readonly S3_BUCKET_NAME?: string;
        readonly S3_ENDPOINT?: string;
        readonly S3_REGION?: string;
        readonly SESSION_SECRET?: string;
    }
}