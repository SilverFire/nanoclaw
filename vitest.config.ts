import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/**/*.test.ts', 'setup/**/*.test.ts'],
    env: {
      // Required by Apple Container's container-runtime.ts at module load time.
      // Tests run without a real Apple Container setup, so use a sentinel value.
      CREDENTIAL_PROXY_HOST: '127.0.0.1',
    },
  },
});
