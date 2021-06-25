import aws from 'aws-sdk'
import {v4 as uuid} from 'uuid'

const { ACCESS_KEY_ID, SECRET_ACCESS_KEY, aws_REGION, S3_BUCKET } = process.env

const uploadBase64 = async (base64:string) => {
  aws.config.setPromisesDependency(require('bluebird'));
  aws.config.update({ accessKeyId: ACCESS_KEY_ID, secretAccessKey: SECRET_ACCESS_KEY, region: aws_REGION });
  const s3 = new aws.S3();
  const base64Data = Buffer.from(base64.replace(/^data:w+\/\w+;base64,/, ""), 'base64');
  const type = base64.split(';')[0].split('/')[1];
  const userId = uuid();
  const params = {
    Bucket: S3_BUCKET, Key: `${userId}.${type}`,  Body: base64Data,ACL: 'public-read',ContentEncoding: 'base64', ContentType: `image/${type}` 
  }
  
  const { Location, Key } = await s3.upload(params).promise();
  return {Location, Key};
}

export default uploadBase64