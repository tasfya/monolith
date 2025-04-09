import Link from "next/link";
import { FaFacebook, FaGithub, FaGoogle, FaTelegram, FaTwitter, FaYoutube } from "react-icons/fa6";

export function  SocialLinks() {
    const links = [
        { name: "Github", url: "https://github.com", icon:  FaGithub },
        { name: "Twitter", url: "https://twitter.com", icon: FaTwitter },
        { name: "LinkedIn", url: "https://linkedin.com", icon: FaFacebook },
        { name: "Youtube", url: "https://youtube.com", icon: FaYoutube },
        { name: "Telegram", url: "https://telegram.org", icon: FaTelegram },
        { name: "Google", url: "https://google.com", icon: FaGoogle },
    ];
    return (
        <div className="flex items-center justify-center space-x-">
            {links.map((link) => {
                const Icon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-primary"
                    >
                        <Icon size={24} />
                    </Link>
                );
            }
            )}
        </div>
    )
}
