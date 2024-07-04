import { Field, Input, Label } from "@headlessui/react";
import { Upload } from "lucide-react";
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import CreatableSelect from "react-select/creatable";
import LocationMap from "../../components/maps/LocationMap";

const options = [
  { value: "internet", label: "internet" },
  { value: "caffetria", label: "caffetria" },
  { value: "accomodation", label: "accomodation" },
];

const NewHostel = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rent, setRent] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [features, setFeatures] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      setSelectedImages((prevState) => [...prevState, file]);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleSubmit = (event) => {
    event.preventDefault();
    const hostelData = {
      name,
      rent,
      description,
      selectedImages,
      features: features.map((f) => f.value),
    };
    console.log(hostelData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-11/12 mx-auto">
      <Field className="mb-4">
        <Label className="block text-gray-700 font-semibold mb-2">Name</Label>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border p-2 w-full rounded"
        />
      </Field>
      <Field className="mb-4">
        <Label className="block text-gray-700 font-semibold mb-2">
          Description
        </Label>
        <Input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="border p-2 w-full rounded"
        />
      </Field>
      <Field className="mb-4">
        <Label className="block text-gray-700 font-semibold mb-2">
          Features
        </Label>
        <CreatableSelect
          isMulti
          isClearable
          name="colors"
          options={options}
          className="basic-multi-select"
          classNamePrefix="select"
          value={features}
          onChange={(val) => setFeatures(val)}
        />
      </Field>
      <Field className="mb-4">
        <Label className="block text-gray-700 font-semibold mb-2">
          Monthly Rent
        </Label>
        <Input
          value={rent}
          onChange={(e) => setRent(e.target.value)}
          required
          className="border p-2 w-full rounded"
        />
      </Field>
      <div
        {...getRootProps()}
        className="flex items-center justify-center gap-2 p-2 border my-2"
      >
        <Input {...getInputProps()} />
        <span>Select Images</span>
        <Upload className="w-4 h-4" />
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
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Add Hostel
      </button>

      <LocationMap />
    </form>
  );
};

export default NewHostel;
