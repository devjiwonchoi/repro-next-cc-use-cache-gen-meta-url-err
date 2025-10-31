The error occurs only in dev.

1. Run dev server
2. Goto http://localhost:3000
3. See the Error Overlay
4. Comment out `'use cache'` directive inside `generateMetadata` function in `app/page.tsx`
5. The error is gone