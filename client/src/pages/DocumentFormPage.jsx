import { useForm } from "react-hook-form";
import { useDocuments } from "../context/DocumentsContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";


function DocumentFormPage() {
  const { register, handleSubmit, setValue} = useForm();
  const { createDocument, getDocument, updateDocument } = useDocuments();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadDocument(){
      if(params.id){
        const document = await getDocument(params.id);
        console.log(document);
        setValue('title', document.title);
        setValue('description', document.description)
      }
    }
    loadDocument()
  }, [] )

  const onSubmit = handleSubmit((data) => {
    if(params.id){
      updateDocument(params.id, data)
    }else{
      createDocument(data)      
    }
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
