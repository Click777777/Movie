import React from "react";
import { useDropzone } from "react-dropzone";
import { BsFillCloudUploadFill } from "react-icons/bs";

const Upload = () => {
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    maxSize: 100000,
    onDrop: (files) => alert(files[0].name),
  });
  return (
    <div className=" w-full text-center">
      <div
        {...getRootProps()}
        className=" px-6 py-8 border-2 border-dashed border-border cursor-pointer rounded-md bg-main"
      >
        <input {...getInputProps()} />
        <span className=" flex-colo text-subMain text-3xl">
          <BsFillCloudUploadFill />
        </span>
        <p className=" text-sm mt-2">
          Drag 'n' drop image here, or click to select image
        </p>
        <em className=" text-xs text-border">
          only <span className=" text-subMain">.png</span> and{" "}
          <span className=" text-subMain">.jpg</span> file will be accepted!
        </em>
      </div>
    </div>
  );
};

export default Upload;
