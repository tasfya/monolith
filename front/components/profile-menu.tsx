import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ProfileMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 px-2 py-1" asChild>
                <Button variant={'outline'} className="flex items-center gap-1 py-[1.5em]">
                    <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span>حسابي</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>دخول</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>تسجيل</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}