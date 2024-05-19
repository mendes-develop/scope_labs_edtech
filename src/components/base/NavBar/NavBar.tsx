import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from 'next/navigation'
import { OpenSheet } from "./AddVideo"
import { Auth } from "./Auth/Auth"

export const NavBar = () => {

  return (<nav className="flex justify-between items-center px-4 p-2 bg-white text-white border-b">
    <div className="flex items-center">
      <Link href="/" className="flex items-center" passHref>
        <Image src="/FULL_LOGO_COLOR.png" alt="Learnwell" height={27} width={100} />
      </Link>
    </div>

    <div className="flex items-center gap-4 justify-end">
      <OpenSheet />
      <Auth />
    </div>
  </nav>)
}
