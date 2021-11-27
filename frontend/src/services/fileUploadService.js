import http from "../http-common";

const upload = (file, onUploadProgress) => {
    let formData = new FormData();

    formData.append(file, formData);

    return http.post("/upload", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        onUploadProgress,
    });
};

const getFiles = () => {
    http.get("/files");
};

export default {upload, getFiles};