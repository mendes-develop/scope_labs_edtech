import Image from "next/image"
import Link from "next/link"
import { OpenSheet } from "./AddVideo"
import { Auth } from "./Auth/Auth"
import { Suspense } from "react"
import { getCookieUserId } from "@/cookies/cookies"

export const NavBar = async () => {

  const cookiesId = await getCookieUserId()

  return (<nav className="flex justify-between items-center px-4 p-2 bg-white text-white border-b">
    <div className="flex items-center">
      <Link href="/" className="flex items-center" passHref>
        <Image src="/FULL_LOGO_COLOR.png" alt="Learnwell" height={27} width={100} />
      </Link>
    </div>

    <div className="flex items-center gap-4 justify-end">
      <Suspense fallback={<div>Loading...</div>}>
        {cookiesId?.value ? <OpenSheet /> : null}
        <Auth />
      </Suspense>
    </div>
  </nav>)
}
