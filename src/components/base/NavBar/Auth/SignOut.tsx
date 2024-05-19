'use client'
// import { createCookie, deleteCookie, getCookieUserId } from "@/cookies/cookies"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { usePopoverState } from "./hooks"
import { deleteCookie } from "@/cookies/cookies"
export function SignOut({ children }: { children: React.ReactNode }) {

  const { closePopover } = usePopoverState()


  return (
    <Popover>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Sign out</h4>
            <p className="text-sm text-muted-foreground">
              Enter with another account.
            </p>
          </div>
          <div className="grid gap-2">
            <Button variant={"outline"} onClick={() => {
              closePopover()
              deleteCookie()
              window.location.reload()
            }}>
              Sign out
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}