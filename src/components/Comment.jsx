import Image from "./Image"

const Comment = () => {
    return (
        <div className="bordered p-4 rounded-xl mb-8">
            <div className="flex items-center gap-4">
                <Image src="userImg.jpeg" className="w-10 h-10 rounded-full object-cover" w="40"></Image>
                <span className="font-medium">John Doe</span>
                <span className="text-sm text-gray-500">2 days ago</span>
            </div>
            <div className="mt-4">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia itaque quia error placeat? Placeat iure, ratione soluta, laudantium expedita eaque laboriosam a explicabo, tempora ipsam maxime dolorem consequuntur pariatur? Eum?
                </p>
            </div>
        </div>
    )
}

export default Comment