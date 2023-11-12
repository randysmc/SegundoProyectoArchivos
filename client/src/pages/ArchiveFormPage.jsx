import { useForm } from "react-hook-form";
import { useArchives } from "../context/ArchivesContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

function ArchiveFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createArchive, getArchive, updateArchive } = useArchives();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadArchive() {
      if (params.id) {
        const archive = await getArchive(params.id);
        console.log(archive);
        setValue("title", archive.title);
        setValue("description", archive.description);
        //setValue('file', archive.file)
        setValue("date", dayjs(archive.date).utc().format("YYYY-MM-DD"));
      }
    }
    loadArchive();
  }, []);

  const onSubmit = handleSubmit((data) => {
    //createArchive(data);
    const dataValid = {
      ...data,
      date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
    };

    if (params.id) {
      updateArchive(params.id, dataValid);
    } else {
      createArchive(dataValid);
    }
    navigate("/archives");
  });

  return (
<div className="flex h-[calc(100vh-100px)] items-center justify-center">
  <div className="bg-gray-800 max-w-md w-full p-8 rounded-md">
    <h2 className="text-2xl font-bold text-white mb-6">Formulario de Creación de Archivo</h2>
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="flex flex-col">
        <label htmlFor="title" className="text-white mb-1">
          Título
        </label>
        <input
          type="text"
          id="title"
          placeholder="Ingrese el título"
          {...register("title")}
          className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          autoFocus
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="extension" className="text-white mb-1">
          Extensión
        </label>
        <select
          id="extension"
          {...register("extension")}
          onChange={(e) => setValue("extension", e.target.value, true)}
          className="w-full bg-gray-700 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="txt">txt</option>
          <option value="html">html</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="description" className="text-white mb-1">
          Descripción
        </label>
        <textarea
          id="description"
          rows="5"
          placeholder="Ingrese la descripción"
          {...register("description")}
          className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        ></textarea>
      </div>

      <div className="flex flex-col">
        <label htmlFor="file" className="text-white mb-1">
          Carpeta
        </label>
        <input
          type="text"
          id="file"
          placeholder="Ingrese el nombre de la carpeta"
          {...register("file")}
          className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="date" className="text-white mb-1">
          Fecha
        </label>
        <input
          type="date"
          id="date"
          {...register("date")}
          className="w-full bg-indigo-500 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <button
        type="submit"
        className="bg-emerald-700 px-4 py-2 rounded-md text-white hover:bg-emerald-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Guardar
      </button>
    </form>
  </div>
</div>
  );
}

export default ArchiveFormPage;

/**
 * 
 *     <div className="flex h-[calc(100vh-100px] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="title"
            {...register("title")}
            className="w-auto bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            autoFocus
          />

          <select
            id="extension"
            {...register("extension")}
            onChange={(e) => setValue("extension", e.target.value, true)}
            className="bg-zinc-700 px-4 py-2 rounded-md my-2"
          >
            <option value="txt">txt</option>
            <option value="html">html</option>
          </select>

          <textarea
            rows="15"
            placeholder="description"
            {...register("description")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          ></textarea>

          <input
            type="text"
            placeholder="carpeta"
            {...register("file")}
            className="bg-zinc-900 text-white px-4 py-2 rounded-md"
          />

          <input type="date" {...register('date')} className="w-full bg-indigo-500 text-white px-4 py-2 rounded-md my-2"/>



          <button className="bg-emerald-700 px-4 py-2 rounded-md my-2">Guardar</button>
        </form>
      </div>
    </div>
 */
