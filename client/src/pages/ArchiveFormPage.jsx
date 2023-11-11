import {useForm} from 'react-hook-form'
import { useArchives } from '../context/ArchivesContext';

function ArchiveFormPage() {
    
    const {register, handleSubmit, setValue} = useForm();
    const { createArchive} = useArchives();



    const onSubmit = handleSubmit((data) =>{
        createArchive(data);
    })


  return (
    <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
        <form onSubmit={onSubmit}>

            <input type="text" placeholder="title"
            {...register('title')}
            className='w-auto bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
            autoFocus
            />
            
            <select id= 'extension'
            {...register('extension')}
            onChange={(e) => setValue('extension', e.target.value, true)}
            className='bg-zinc-700 px-4 py-2 rounded-md my-2' >
                <option value='txt'>txt</option>
                <option value='html'>html</option>

            </select>
            
            <textarea rows='4' placeholder="description"{...register('description')}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
            ></textarea>
            
            <input type="text" placeholder="carpeta" 
            {...register('file')}
            className='bg-zinc-900 text-white px-4 py-2 rounded-md'/>
            <button>Guardar</button>
        </form>
    </div>
  )
}

export default ArchiveFormPage