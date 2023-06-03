declare namespace NodeJS {
  interface ProcessEnv {
    SUPABASE_URL: string;
    SUPABASE_ANON: string;
    SUPABASE_SERVICE_ROLE: string;
    SUPABASE_JWT: string;
  }
}
