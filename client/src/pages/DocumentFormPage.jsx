import { useForm } from "react-hook-form";
import { useDocuments } from "../context/DocumentsContext";
import { useNavigate } from "react-router-dom";


function DocumentFormPage() {
  const { register, handleSubmit } = useForm();
  const { createDocument } = useDocuments();
  const navigate = useNavigate();
  //console.log(createDocument())

  const onSubmit = handleSubmit((data) => {
    createDocument(data);
    navigate('/documents')
  });

  return (
    <div className="bg-red-950 max-w w-full p-8 rounded-md">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          {...register("title")}
          className="bg-gray-800 text-white px-4 py-2 rounded-md my-2"
          autoFocus
        />
        <input
          type="text"
          placeholder="extension"
          {...register("extension")}
          className="bg-gray-800 text-white px-10 py-2 rounded-md my-2"
        />
        <textarea
          rows="3"
          placeholder="Description"
          {...register("description")}
          className="w-full bg-gray-800 text-white px-4 py-2 rounded-md my-2"
        ></textarea>
        <button>Save</button>
      </form>
    </div>
  );
}

export default DocumentFormPage;
