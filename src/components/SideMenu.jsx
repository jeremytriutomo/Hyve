import Search from "../components/Search"
import { Link } from "react-router-dom"

const Sidemenu = () => {
    return(
        <div className="px-4 h-max sticky top-8">
            <h1 className="mb-4 text-sm font-medium">Search</h1>
            <Search></Search>
            <h1 className="mt-8 mb-4 text-sm font-medium">Filter</h1>
            <div className="flex flex-col gap-2 text-sm">

                <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="sort" value="newest" 
                    className="appearance-none w-4 h-4 border-[1.5px] border-yellow-800 cursor-pointer bg-white rounded-sm checked:bg-yellow-500"></input>
                    Newest
                </label>

                <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="sort" value="popular" 
                    className="appearance-none w-4 h-4 border-[1.5px] border-yellow-800 cursor-pointer bg-white rounded-sm checked:bg-yellow-500"></input>
                    Most Popular
                </label>

                <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="sort" value="trending" 
                    className="appearance-none w-4 h-4 border-[1.5px] border-yellow-800 cursor-pointer bg-white rounded-sm checked:bg-yellow-500"></input>
                    Trending
                </label>

                <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="sort" value="oldest" 
                    className="appearance-none w-4 h-4 border-[1.5px] border-yellow-800 cursor-pointer bg-white rounded-sm checked:bg-yellow-500"></input>
                    Oldest
                </label>

            </div>
            <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
            <div className="flex flex-col gap-2 text-sm">
                <Link className="underline" to="/posts">All</Link>
                <Link className="underline" to="/posts?cat=web-design">Web Design</Link>
                <Link className="underline" to="/posts?cat=development">Development</Link>
                <Link className="underline" to="/posts?cat=databases">Databases</Link>
                <Link className="underline" to="/posts?cat=seo">Search Engines</Link>
                <Link className="underline" to="/posts?cat=marketing">Marketing</Link>
            </div>
        </div>
    )
}

export default Sidemenu