import { useForm } from "react-hook-form";
import { useDocuments } from "../context/DocumentsContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)


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
        setValue('date', dayjs(document.date).utc().format('YYYY-MM-DD'));
      }
    }
    loadDocument()
  }, [] )

  const onSubmit = handleSubmit((data) => {
    const dataValid = {
      ...data,
      date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
    };

    console.log(dataValid)

    if(params.id){
      updateDocument(params.id, dataValid)
    }else{
      createDocument(dataValid)      
    }
    navigate('/documents')

  });

  return (
    <div className="bg-gray-600 max-w w-full p-1 rounded-md">
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Titulo</label>
        <input
          type="text"
          placeholder="Title"
          {...register("title")}
          className="bg-gray-800 text-white px-6 py-2 rounded-md my-2"
          autoFocus
        />
        <label htmlFor="extension">Extension</label>
        <input
          type="text"
          placeholder="extension"
          {...register("extension")}
          className="bg-gray-800 text-white px-4 py-2 rounded-md my-2"
        />
        <label htmlFor="description">Descripcion</label>
        <textarea
          rows="3"
          placeholder="Description"
          {...register("description")}
          className="w-full bg-gray-800 text-white px-4 py-2 rounded-md my-2"
        ></textarea>

        <label htmlFor="date">Fecha</label>
        <input type="date" {...register('date')} className=" w-full bg-indigo-700 text-white, px-4 py-2 rounded-md"></input>
        <button className="bg-indigo-500 px-4, py-2 rounded-md">Save</button>
      </form>
    </div>
  );
}

export default DocumentFormPage;
