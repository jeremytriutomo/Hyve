import { Link } from "react-router-dom"
import Image from "./Image";

const PostListItem = () => {
    return(
        <div className="flex flex-col xl:flex-row gap-8">
            {/* Image */}
                <div className="md:hidden xl:block xl:w-1/3">
                    <Image src="postImg.jpeg" className="rounded-2xl object-cover w=735"></Image>
                </div>
            {/* Details */}
                <div className="flex flex-col gap-4 xl:w-2/3">
                    <Link to="/test" className="text-4xl font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Link>
                    <div className="flex items-center gap-2 text-gray-800 text-sm">
                        <span>Written by</span>
                        <Link className="text-yellow-600 font-bold">John Doe</Link>
                        <span>on</span>
                        <Link className="text-yellow-600 font-medium">web Design</Link>
                        <span>2 days ago</span>
                    </div>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quasi cupiditate optio sint accusamus quia, at iusto iste corporis 
                    fuga modi porro alias eveniet sequi obcaecati voluptatibus aliquam, quisquam, voluptas atque! 
                    </p>
                    <Link to="/test" className="underline text-yellow-600 font-medium text-sm">Read More</Link>
                </div>
        </div>
    )
}

export default PostListItem