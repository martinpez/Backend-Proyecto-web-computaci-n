import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

dotenv.config();
const app = express();
app.use(cors());

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});

app.get('/download/:folder/:filename', async (req, res) => {
  const { folder, filename } = req.params;
  const key = `${folder}/${filename}`;
  console.log(`Generando enlace para: ${key}`);
  if (!process.env.AWS_BUCKET) {
    return res.status(500).json({ error: 'Bucket no configurado.' });
  }
  try {
    const command = new GetObjectCommand({
      Bucket: process.env.AWS_BUCKET,
      Key: key
    });

    const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
    res.json({ url });
  } catch (err) {
    res.status(500).json({ error: 'No se pudo generar el enlace.' });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`API corriendo en http://localhost:${PORT}`));
