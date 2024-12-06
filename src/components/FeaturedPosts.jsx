import { Link } from "react-router-dom"
import Image from "./Image"

const FeaturedPosts = () => {
    return(
        <div className="mt-8 flex flex-col lg:flex-row gap-8">
            {/*First*/}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
                {/*Image*/}
                <Image src="featured1.jpeg" className="rounded-3xl object-cover" w="895"></Image>
                {/*Details*/}
                <div className="flex item-center gap-4">
                    <h1 className="font-semibold lg:text-lg">01.</h1>
                    <Link className="font-medium text-yellow-600 lg:text-lg">Information System</Link>
                    <span className="text-gray-800">2 days ago</span>
                </div>
                {/*Title*/}
                <Link to="/test" className="text-xl lg:text-3xl font-semibold lg:font-bold">Software Engineering: Agile Methodology</Link>
            </div>
            {/*Others*/}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
                {/*Second*/}
                <div className="lg:h-1/3 flex justify-between gap-4">
                    <div className="w-1/3 aspect-video">
                        <Image src="featured2.jpeg" className="rounded-3xl object-cover w-full h-full" w="298"></Image>
                    </div>
                    {/* details and title */}
                    <div className="w-2/3">
                        {/* details */}
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <h1 className="font-semibold">02.</h1>
                            <Link className="font-medium text-yellow-600">Information System</Link>
                            <span className="text-gray-800 text-sm">2 days ago</span>
                        </div>
                        {/* title */}
                        <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">
                            Cyber Ethics Notes: Black Hat vs White Hat Hackers
                        </Link>
                    </div>
                </div>
                {/*Third*/}
                <div className="lg:h-1/3 flex justify-between gap-4">
                    <div className="w-1/3 aspect-video">
                        <Image src="featured3.jpeg" className="rounded-3xl object-cover w-full h-full" w="298"></Image>
                    </div>
                    {/* details and title */}
                    <div className="w-2/3">
                        {/* details */}
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <h1 className="font-semibold">03.</h1>
                            <Link className="font-medium text-yellow-600">Information System</Link>
                            <span className="text-gray-800 text-sm">2 days ago</span>
                        </div>
                        {/* title */}
                        <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">
                            MIS Notes: Knowledge Management
                        </Link>
                    </div>
                </div>
                {/*Fourth*/}
                <div className="lg:h-1/3 flex justify-between gap-4">
                    <div className="w-1/3 aspect-video">
                        <Image src="featured4.jpeg" className="rounded-3xl object-cover w-full h-full" w="298"></Image>
                    </div>
                    {/* details and title */}
                    <div className="w-2/3">
                        {/* details */}
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <h1 className="font-semibold">04.</h1>
                            <Link className="font-medium text-yellow-600">Information System</Link>
                            <span className="text-gray-800 text-sm">2 days ago</span>
                        </div>
                        {/* title */}
                        <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">
                            ITPM Notes: Quality Assurance
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedPosts