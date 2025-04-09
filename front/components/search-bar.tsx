import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { FaSliders } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

export function SearchBar() {
    const categories = [
        { name: "All", value: "all" },
        { name: "Products", value: "products" },
        { name: "Services", value: "services" },
        { name: "Blog", value: "blog" },
        { name: "News", value: "news" },
        { name: "Events", value: "events" },
    ]
    return (
        <div className="flex items-center justify-between w-full border border-gray-300 rounded-md shadow-sm p-1 gap-1/2 ">
            <div className="relative">
                <Input type="text" placeholder="كلمة البحث" className="pr-8 border-none focus-visible:ring-[0px] focus-visible:border-none shadow-none" />
                <CiSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant={'outline'}>
                        <span>الدروس العلمية</span>
                        <FaSliders className="mr-1/2" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {categories.map((category) => (
                        <DropdownMenuItem key={category.value}>
                            {category.name}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}