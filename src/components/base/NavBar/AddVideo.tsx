'use client'
import { usePathname } from 'next/navigation'
import { PlusIcon } from "@radix-ui/react-icons"
import { useSheetState } from '../CreateVideoSheet/hooks'
export const OpenSheet = async () => {
  const { openSheet } = useSheetState()
  const pathname = usePathname()

  return (
    !pathname.includes('video-detail') ? <div className="cursor-pointer" onClick={() => openSheet()}>
      <PlusIcon className="stroke-primary" height={20} width={20} />
    </div> : null
  )
}


