import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const S3 = new S3Client({
    region: config.cloudflareR2Region ?? "auto",
    endpoint: `https://${config.cloudflareR2AccountID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: config.cloudflareR2AccessKey!,
      secretAccessKey: config.cloudflareR2SecretAccessKey!,
    },
  });

  const getObjectCommand = new GetObjectCommand({
    Bucket: "nuxt-portfolio-assets",
    Key: event.context.params!.key,
  });

  const options = {
    expiresIn: 3600,
  };

  // Expires in 7 days
  try {
    return await getSignedUrl(S3, getObjectCommand, options);
  } catch (error) {
    return { statusCode: 500, error };
  }
});
