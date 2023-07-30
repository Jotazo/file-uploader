import axios from "axios";

const API_URL =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_URL_DEV
    : import.meta.env.VITE_API_URL_PROD;

interface PostResponse {
  fileUrl: string;
}

interface Upload {
  error: string | undefined;
  fileUrl: string | null;
}

interface ValidationError {
  message: string;
  errors: Record<string, string[]>;
}

export const uploadFile = async (file: File): Promise<Upload> => {
  const formData = new FormData();
  formData.append("file", file);
  try {
    const res = await axios.post<PostResponse>("/api/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const { fileUrl } = res.data;
    const fileUrlParsed = `${API_URL}${fileUrl}`;

    return { error: undefined, fileUrl: fileUrlParsed };
  } catch (error) {
    if (axios.isAxiosError<ValidationError, Record<string, unknown>>(error)) {
      return { error: error.response?.data.message, fileUrl: null };
    }

    return { error: undefined, fileUrl: null };
  }
};
