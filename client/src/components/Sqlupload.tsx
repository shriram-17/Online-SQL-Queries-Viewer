import { Component,createSignal } from "solid-js";

const Upload: Component = () => {
    const [file, setFile] = createSignal<File | null >(null);

    const [errorMessage, setErrorMessage] = createSignal("");

    const handleFileSelect = (event: Event) => {
      const target = event.target as HTMLInputElement;
      const selectedFile = target.files && target.files[0];
      setFile(selectedFile);
    };

    const handleFileUpload = () => {
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
  
        fetch("/upload-endpoint", {
          method: "POST",
          body: formData,
        })
          .then(response => {
            if (response.ok) {
              console.log("File uploaded!");
              setErrorMessage("");
            } else {
              throw new Error("Failed to upload file");
            }
          })
          .catch(error => {
            setErrorMessage("An error occurred during file upload");
            console.error(error);
          });
      } else {
        setErrorMessage("Please select a file");
      }
    };
  
    return (
      <div>
        <h1 class="font-mono text-center font-semibold mt-8">Upload SQL Files Here</h1>
        <input type="file" class="ml-96 mt-4" onChange={handleFileSelect} />
        <button class="ml-96 mt-4 font-mono font-semibold" onClick={handleFileUpload}>
          Click Here
        </button>
        {errorMessage() && <p class="ml-96 mt-4 text-red-500">{errorMessage()}</p>}
      </div>
    );
  };
  
  export default Upload;
  