import { globby } from "globby";
import {
  getPhotoData,
  getPhotosCachePath,
  getPhotosPath,
} from "../src/libs/data/photos";
import fs from "fs";
import { cacheDir } from "../const";
import sharp from "sharp";
import { getPlaceholderImageCachePath } from "@/libs/data/posts";

async function genPhotoCache() {
  const paths = await globby(getPhotosPath());
  await Promise.all(
    paths.map((path) =>
      getPhotoData(path).then((data) =>
        fs.promises.writeFile(
          getPhotosCachePath(data.slug),
          JSON.stringify(data)
        )
      )
    )
  );
}

async function genPostImageCache() {
  const paths = await globby(`public/images/posts/**/*.(jpg|jpeg|png)`);
  await Promise.all(
    paths.map((path) =>
      sharp(path)
        .resize(10)
        .blur(5)
        .jpeg({ mozjpeg: true })
        .toBuffer()
        .then((r) =>
          fs.promises.writeFile(
            getPlaceholderImageCachePath(path),
            `data:image/jpeg;base64,${r.toString("base64")}`
          )
        )
    )
  );
}

async function genCache() {
  if (fs.existsSync(cacheDir)) {
    await fs.promises.rm(cacheDir, { recursive: true });
  }
  fs.mkdirSync(cacheDir);

  await Promise.all([genPhotoCache(), genPostImageCache()]);
}

genCache();
