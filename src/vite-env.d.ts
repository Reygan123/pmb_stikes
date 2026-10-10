/// <reference types="vite/client" />

declare module 'vue' {
  interface ComponentCustomProperties {
    $t: (key: string, fallback?: string) => string;
    $lang: any;
  }
}

export {};
