# Steps to reproduce

1. Start the development environment by running `vite` (e.g. `npx vite`, `yarn vite`).
2. Go to http://localhost:5173/ and take note of the console warning and error.

   ```
   [Vue warn]: Unhandled error during execution of setup function
     at <RouterLink to= {name: 'non-existing-route'} >
     at <App>
   ```

   ```
   vue-router.js?v=271f20ea:750 Uncaught Error: No match for
    {"name":"non-existing-route","params":{}}
       at createRouterError (vue-router.js?v=271f20ea:750:19)
       at Object.resolve (vue-router.js?v=271f20ea:1202:15)
       at Object.resolve (vue-router.js?v=271f20ea:2320:34)
       at vue-router.js?v=271f20ea:1597:39
       at ReactiveEffect.fn (chunk-3CCIBI4V.js?v=271f20ea:1237:13)
       at ReactiveEffect.run (chunk-3CCIBI4V.js?v=271f20ea:430:19)
       at get value (chunk-3CCIBI4V.js?v=271f20ea:1249:107)
       at useLink (vue-router.js?v=271f20ea:1633:22)
       at setup (vue-router.js?v=271f20ea:1674:27)
       at callWithErrorHandling (chunk-3CCIBI4V.js?v=271f20ea:1657:19)
   ```

3. Build for production by running `vite build` (e.g. `npx vite build`, `yarn vite build`).
4. Run `http-server dist` (e.g. `npx http-server dist`, `yarn http-server dist`).
5. Go to http://localhost:8080/ and take note of the console error.

   ```
   index-w07yFLF8.js:13 Error
       at yt (index-w07yFLF8.js:21:6095)
       at Object.d [as resolve] (index-w07yFLF8.js:21:10933)
       at Object.T [as resolve] (index-w07yFLF8.js:21:18123)
       at index-w07yFLF8.js:21:14301
       at Zn.fn (index-w07yFLF8.js:9:8939)
       at Zn.run (index-w07yFLF8.js:9:1446)
       at get value (index-w07yFLF8.js:9:9183)
       at index-w07yFLF8.js:21:14349
       at Zn.fn (index-w07yFLF8.js:9:8939)
       at Zn.run (index-w07yFLF8.js:9:1446)
   ```

**Expected result**:

The error in the production build tells me something about the nature of the route resolution error.

**Actual result**:

The error in the production build only has an intact stack trace, but no error message and crucially, which route couldn’t be resolved using which parameters isn’t included.
