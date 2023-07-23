import axios from "axios";

interface PostResponse {
  fileUrl: string;
}

interface Upload {
  error: string | undefined;
  res: { data: { fileUrl: string } } | null;
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
    return { error: undefined, res };
  } catch (error) {
    if (axios.isAxiosError<ValidationError, Record<string, unknown>>(error)) {
      return { error: error.response?.data.message, res: null };
    }

    return { error: undefined, res: null };
  }
};
