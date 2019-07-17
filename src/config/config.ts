export const config = {
  "dev": {
    "username": process.env.POSTGRES_USERNAME,
    "password": process.env.POSTGRES_PASS,
    "database": process.env.POSTGRES_DB_NAME,
    "host": process.env.POSTGRES_HOST,
    "dialect": "postgres",
    "aws_reigion": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": process.env.AWS_BUCKET,
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt":{
    "secret":process.env.JWT_SECRET
  }
}
