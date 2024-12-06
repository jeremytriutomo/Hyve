import { useUser } from "@clerk/clerk-react"
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from 'react-quill-new';

const Write = () => {

  const {isLoaded, isSignedIn} = useUser()

  if (!isLoaded) {
    return <div className="">Loading...</div>
  }

  if (isLoaded && isSignedIn) {
    return <div className="">You should login!</div>
  }

  return (
    <div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6'>
      <h1 className="text-cl font-light">Create a new Post</h1>
      <form className="flex flex-col gap-6 flex-1 mb-6">
        <button className="w-max p-2 shadow-sm rounded-xl text-sm color-hyve bg-white font-medium bordered-hyve hover:bg-yellow-500 hover:text-white">Add a cover image</button>
        <input className="text-4xl font-semibold bg-transparent outline-none" type="text" placeholder="Note Title"></input>
        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm">Choose a category:</label>
          <select name="cat" id="" className="p-2 rounded-xl bg-white shadow-md">
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea className="p-4 rounded-xl bg-white shadow-sm  bordered-hyve text-yellow-800 font-semibold" name="desc" placeholder="A short Description"></textarea>
        <ReactQuill theme="snow" className="bordered-hyve flex-1 rounded-xl bg-white shadow-sm"></ReactQuill>
        <button className="bg-hyve text-white font-medium rounded-xl mt-4 p-2 w-36">Send</button>
      </form>
    </div>
  )
}

export default Write