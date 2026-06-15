import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => {
  return {
    upload: {
      config: {
        provider: '@strapi/provider-upload-aws-s3',
        providerOptions: {
          credentials: {
            accessKeyId: env('SUPABASE_S3_ACCESS_KEY_ID'),
            secretAccessKey: env('SUPABASE_S3_SECRET_ACCESS_KEY'),
          },
          region: env('SUPABASE_REGION'),
          endpoint: env('SUPABASE_S3_ENDPOINT'),
          params: {
            Bucket: env('SUPABASE_STORAGE_BUCKET'),
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
  };
};

export default config;
