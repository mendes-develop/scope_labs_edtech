import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { SLInput } from "../base/SLInput"

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          Start Adding your videos!
        </Button>
      </SheetTrigger>
      <SheetContent side={"bottom"}>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when youre done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {/* <SLInput />
          <SLInput />
          <SLInput /> */}

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-left">
              Title
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-left">
              Description
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-left">
              Video URL
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>


        </div>
        <SheetFooter>
          <SheetClose asChild >
            <Button type="submit" >Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
