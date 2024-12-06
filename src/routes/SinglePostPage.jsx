import { Link } from "react-router-dom";
import Image from "../components/Image";
import PostMenuAction from "../components/PostMenuAction";
import Search from "../components/Search";
import Comments from "../components/Comments";

const SinglePostPage = () => {
  return (
    <div className='flex flex-col gap-8'>
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">Lorem Ipsum</h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-yellow-600 font-bold">John Doe</Link>
            <span>on</span>
            <Link className="text-yellow-600 font-medium">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Ea facere eos ipsum doloribus voluptatibus dolor veniam enim et 
            autem assumenda, inventore cupiditate corporis quisquam reprehenderit 
            minima totam libero consequatur quasi.
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" w="600" className="rounded-2xl"></Image>
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-12 justify-between">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Veniam fugit, corrupti dignissimos quam ex nam voluptatem. 
            Quo nobis, expedita recusandae tenetur temporibus debitis aliquid, 
            quis commodi, voluptas totam rem unde.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Veniam fugit, corrupti dignissimos quam ex nam voluptatem. 
            Quo nobis, expedita recusandae tenetur temporibus debitis aliquid, 
            quis commodi, voluptas totam rem unde.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Veniam fugit, corrupti dignissimos quam ex nam voluptatem. 
            Quo nobis, expedita recusandae tenetur temporibus debitis aliquid, 
            quis commodi, voluptas totam rem unde.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Veniam fugit, corrupti dignissimos quam ex nam voluptatem. 
            Quo nobis, expedita recusandae tenetur temporibus debitis aliquid, 
            quis commodi, voluptas totam rem unde.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Veniam fugit, corrupti dignissimos quam ex nam voluptatem. 
            Quo nobis, expedita recusandae tenetur temporibus debitis aliquid, 
            quis commodi, voluptas totam rem unde.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Veniam fugit, corrupti dignissimos quam ex nam voluptatem. 
            Quo nobis, expedita recusandae tenetur temporibus debitis aliquid, 
            quis commodi, voluptas totam rem unde.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Veniam fugit, corrupti dignissimos quam ex nam voluptatem. 
            Quo nobis, expedita recusandae tenetur temporibus debitis aliquid, 
            quis commodi, voluptas totam rem unde.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Veniam fugit, corrupti dignissimos quam ex nam voluptatem. 
            Quo nobis, expedita recusandae tenetur temporibus debitis aliquid, 
            quis commodi, voluptas totam rem unde.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Veniam fugit, corrupti dignissimos quam ex nam voluptatem. 
            Quo nobis, expedita recusandae tenetur temporibus debitis aliquid, 
            quis commodi, voluptas totam rem unde.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Veniam fugit, corrupti dignissimos quam ex nam voluptatem. 
            Quo nobis, expedita recusandae tenetur temporibus debitis aliquid, 
            quis commodi, voluptas totam rem unde.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Veniam fugit, corrupti dignissimos quam ex nam voluptatem. 
            Quo nobis, expedita recusandae tenetur temporibus debitis aliquid, 
            quis commodi, voluptas totam rem unde.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Veniam fugit, corrupti dignissimos quam ex nam voluptatem. 
            Quo nobis, expedita recusandae tenetur temporibus debitis aliquid, 
            quis commodi, voluptas totam rem unde.
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <Image src="userImg.jpeg" className="w-12 h-12 rounded-full object-cover" w="48" h="48"></Image>
            </div>
              <Link className="text-yellow-600 font-bold">John Doe</Link>
              <p className="text-sm text-gray-800">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              <div className="flex gap-2">
                <Link><Image src="facebook.svg"></Image></Link>
                <Link><Image src="instagram.svg"></Image></Link>
              </div>
          </div>
          <PostMenuAction></PostMenuAction>
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">Web Design</Link>
            <Link className="underline" to="/">Development</Link>
            <Link className="underline" to="/">Databases</Link>
            <Link className="underline" to="/">Search Engines</Link>
            <Link className="underline" to="/">Marketing</Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search></Search>
        </div>
      </div>
      <Comments></Comments>
    </div>
  )
}

export default SinglePostPage