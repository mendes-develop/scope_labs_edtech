'use client'
import { useSearchParams } from 'next/navigation'
import { PlusIcon } from "@radix-ui/react-icons"
import { useSheetState } from '../CreateVideoSheet/hooks'
export const OpenSheet = () => {
  const { openSheet } = useSheetState()

  return (<div className="cursor-pointer" onClick={() => openSheet()}>
    <PlusIcon className="stroke-primary" height={20} width={20} />
  </div>)
}


