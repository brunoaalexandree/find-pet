/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON: string;
  readonly VITE_SUPABASE_SERVICE_ROLE: string;
  readonly VITE_SUPABASE_JWT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
