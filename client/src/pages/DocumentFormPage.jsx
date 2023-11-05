import {useForm} from 'react-hook-form'

function DocumentFormPage() {

  const{register, handleSubmit} = useForm()

  const onSubmit = handleSubmit((data)=>{
    console.log(data)
  })

  return (
    <div className='bg-red-950 max-w-md w-full p-10 rounded-md'>

    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Title" {...register("title")} className='bg-gray-800 text-white px-4 py-2 rounded-md'autoFocus/>
      <input type="text" placeholder="extension" {...register("extension")} className='bg-gray-800 text-white px-4 py-2 rounded-md'/>
      <textarea rows="3" placeholder='Description' {...register("description")} className='w-full bg-gray-800 text-white px-4 py-2 rounded-md'>
  </textarea>
  <button>Save</button>
    </form>

    </div>
  )
}

export default DocumentFormPage