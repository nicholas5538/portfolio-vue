function useGetCloudflareR2Object(r2Key: string): Promise<string> {
  return $fetch(`/api/cloudflareR2/${r2Key}`, {
    method: "get",
    timeout: 500,
  });
}

export default useGetCloudflareR2Object;
