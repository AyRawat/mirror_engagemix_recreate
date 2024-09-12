import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const InviteMemberModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40" />
      <DialogContent className="max-w-md p-6 bg-white shadow-lg rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-center text-lg font-semibold">
            <div className="mb-4">
              <div className="text-center text-sm text-gray-500">
                www.homelade.io
              </div>
              <span>Customise your workspace</span>
            </div>
            <div className="text-center text-sm text-gray-700">
              Invite a team member
            </div>
          </DialogTitle>
        </DialogHeader>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="access" className="text-gray-700">
              Access privileges
            </Label>
            <Select>
              <SelectTrigger id="access" className="w-full">
                <button className="w-full text-left">Allow edit access</button>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="edit">Allow edit access</SelectItem>
                <SelectItem value="view">View only</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <DialogFooter className="flex justify-between">
            <Button variant="outline" className="px-4" onClick={onClose}>
              Skip
            </Button>
            <Button type="submit" className="bg-blue-500 text-white px-4">
              Invite member
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InviteMemberModal;
