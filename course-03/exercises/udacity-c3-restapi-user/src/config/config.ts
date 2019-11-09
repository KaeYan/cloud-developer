export const config = {
  "dev": {
    "username": process.env.UDAGRAM_USERNAME,
    "password": process.env.UDAGRAM_PASSWORD,
    "database": process.env.UDAGRAM_DB,
    "host": process.env.UDAGRAM_HOST,
    "dialect": process.env.UDAGRAM_DIALECT,
    "aws_region": process.env.UDAGRAM_REGION,
    "aws_profile": process.env.UDAGRAM_PROFILE,
    "aws_media_bucket": process.env.UDAGRAM_AWS_MEDIA_BUCKET
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": "helloworld"    
  }

}
