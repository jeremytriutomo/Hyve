import { Link } from "react-router-dom"

const MainCategories = () => {
    return (
        <div className="hidden md:flex bg-hyve rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
            {/*LINKS*/}
            <div className="flex-1 flex items-center justify-between flex-wrap">
                <Link to="/posts" className="bg-white text-black rounded-full px-4 py-2">
                    All posts
                </Link>
                
                <Link to="/posts?cat=web-design" className="hover:bg-white text-black rounded-full px-4 py-2">
                    Web Design
                </Link>

                <Link to="/posts?cat=development" className="hover:bg-white rounded-full px-4 py-2">
                    Development
                </Link>

                <Link to="/posts?cat=databases" className="hover:bg-white rounded-full px-4 py-2">
                    Databases
                </Link>

                <Link to="/posts?cat=seo" className="hover:bg-white rounded-full px-4 py-2">
                    Search Engines
                </Link>

            </div>
            <span className="text-xl font-medium">|</span>
            {/*Search*/}
            <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
                <svg
                    xmlns="http://wwww.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="gray"
                >
                    <circle cx="10.5" cy="10.5" r="7.5" /> 
                    <line x1="16.5" y1="16.5" x2="22" y2="22" />       
                </svg>
                <input type="text" placeholder="search a post..." className="bg-transparent"></input>
            </div>
        </div>
    )
}

export default MainCategories