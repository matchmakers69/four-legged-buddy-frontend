import React, { useState } from "react";
import Button from "src/components/common/Button";
import FormGroup from "src/components/common/FormElement/FormGroup";
import { API_URL } from "src/config";

type IImageUploadProps = {
  memberId: string;
  imageUploaded: () => void;
  userToken: string;
};

const ImageUpload = function ({ memberId, imageUploaded, userToken }: IImageUploadProps) {
  const [image, setImage] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);

  const handleUploadImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    setImage(file);
  };

  const handleUploadImageSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("files", image);
    formData.append("ref", "members");
    formData.append("refId", memberId);
    formData.append("field", "image");
    const response = await fetch(`${API_URL}/upload`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
      body: formData,
    });
    if (response.ok) {
      imageUploaded();
    }
  };

  return (
    <div>
      <form noValidate onSubmit={handleUploadImageSubmit}>
        <FormGroup>
          <input type="file" onChange={handleUploadImageChange} />
        </FormGroup>
        <FormGroup>
          <Button loading={loading} disable={loading} className="btn--submit" type="submit" variant="filled">
            Upload image
          </Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default ImageUpload;
