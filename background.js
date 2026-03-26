const runtime = globalThis.browser?.runtime ?? globalThis.chrome?.runtime;

runtime?.onInstalled?.addListener(() => {
  console.log("Extension installed");
});
