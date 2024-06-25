import { Upload } from "lucide-react";
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

const NewHostel = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      setSelectedImages((prevState) => [...prevState, file]);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleSubmit = (event) => {
    event.preventDefault();
    const hostelData = {
      name: name,
      description,
      selectedImages,
    };
    console.log(hostelData);
    // Here you can add code to submit this data to a server or API
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <div {...getRootProps()}>
            <input {...getInputProps()} />

            <Upload className="w-6 h-6" />
          </div>

          <div className="w-full grid grid-cols-4 gap-4">
            {selectedImages.length > 0 &&
              selectedImages.map((image, index) => (
                <img
                  src={`${URL.createObjectURL(image)}`}
                  key={index}
                  alt=""
                  className="w-64 h-64 rounded-md"
                />
              ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Add Hostel
        </button>
      </form>
    </div>
  );
};

export default NewHostel;
