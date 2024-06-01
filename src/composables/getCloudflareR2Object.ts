async function useGetCloudflareR2Object(key: string, r2Key: string) {
  const { data } = await useAsyncData(
    key,
    () =>
      $fetch(`/api/cloudflareR2/${r2Key}`, {
        method: "get",
        timeout: 5000,
      }),
    {
      deep: false,
      getCachedData(key, nuxtApp) {
        return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
      },
      server: true,
    }
  );

  return data;
}

export default useGetCloudflareR2Object;
