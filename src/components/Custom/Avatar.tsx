import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const UserAvatars = () => {
  const users = Array(11).fill(null)

  return (
    <div className="flex -space-x-2 overflow-hidden">
      {users.map((_, index) => (
        <Avatar key={index} className="inline-block border-2 border-background">
          <AvatarImage src={`/placeholder-avatar-${index + 1}.png`} />
          <AvatarFallback>U{index + 1}</AvatarFallback>
        </Avatar>
      ))}
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-sm font-medium">
        +MW
      </div>
    </div>
  )
}

export default UserAvatars