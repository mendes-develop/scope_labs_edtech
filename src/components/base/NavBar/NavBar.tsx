import { PersonIcon, PlusIcon, } from "@radix-ui/react-icons"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import Link from "next/link"

// export const NavBar2 = () => {
//   return <NavigationMenuItem>
//     {/* https://nextjs.org/docs/pages/api-reference/components/link#legacybehavior */}
//     <Link href="/" legacyBehavior passHref>
//       <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//         Documentation
//       </NavigationMenuLink>
//     </Link>
//   </NavigationMenuItem>
// }


export const NavBar = () => {
  return (<nav className="flex justify-between items-center px-4 p-2 bg-white text-white border-b">
    <div className="flex items-center border">
      {/* <a href="/" className="flex items-center"> */}
      <Link href="/" className="flex items-center" passHref>
        <Image src="/FULL_LOGO_COLOR.png" alt="Learnwell" height={27} width={100} />
        {/* <span className="font-bold">EdTech</span> */}
      </Link>
      {/* </a> */}
    </div>

    <div className="flex items-center gap-4 justify-end">

      <div className="">
        <PlusIcon className="stroke-primary" height={20} width={20} />
      </div>

      <div className="">
        <PersonIcon className="stroke-primary" height={20} width={20} />
      </div>

      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://api.dicebear.com/8.x/initials/svg?radius=50&seed=Felix"
          alt="avatar"
          width={20}
          height={20}
        />
      </div>
    </div>
  </nav>)
}