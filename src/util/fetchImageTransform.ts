import { getCldImageUrl } from "astro-cloudinary/helpers";

export let loading: boolean;

export async function fetchImageTransform(id: any) {
  loading = true;

  try {
    const getUrl = await getCldImageUrl({
      src: id,
      removeBackground: true,
      flags: "relative",
      width: "500",
      height: "500",
      crop: "fill",
      gravity: "auto",
      aspectRatio: 0.5,
    });

    const response = await fetch(getUrl);
    loading = false;
    if (!response.ok) {
      return { status: response.status };
    }
    return { getUrl };
  } catch {
    return { status: 404 };
  }
}
