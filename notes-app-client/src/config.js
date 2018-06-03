export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'sstutorial-uploads'
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://1hq4mdza9l.execute-api.us-east-1.amazonaws.com/prod',
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_doDpJytwG',
    APP_CLIENT_ID: '7b078f5fpa6o5hrq0el45q8npg',
    IDENTITY_POOL_ID: 'us-east-1:a281e9fe-50b5-447b-9622-602fb945818f'
  }
}
