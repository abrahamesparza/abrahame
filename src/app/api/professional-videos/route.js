import AWS from "aws-sdk";
import { NextResponse } from "next/server";

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();
const BUCKET_NAME = "esparza-studios";
const PREFIX = "professional/";

export async function GET(req, res) {
    console.log('in API function')
  if (req.method !== "GET") {
    return NextResponse.json({ message: 'Method now allowed' });
  }

  try {
    const params = {
      Bucket: BUCKET_NAME,
      Prefix: PREFIX,
    };

    const data = await s3.listObjectsV2(params).promise();
    const filteredData = data.Contents.slice(1);

    const videos = await Promise.all(
      filteredData.map(async (file) => {
        const signedUrl = s3.getSignedUrl('getObject', {
          Bucket: BUCKET_NAME,
          Key: file.Key,
          Expires: 60 * 60,
        });

        return {
          key: file.Key.split('/')[1].split('-')[0].toLowerCase(),
          url: signedUrl, 
        };
      })
    );

    return NextResponse.json({ message: videos });
  } catch (error) {
    console.error("Error retrieving videos:", error);
    return NextResponse.json({ message: error });
  }
}
