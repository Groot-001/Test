type AvatarProps = {
  avatar?: string;
  name: string;
};

export function Avatar({ avatar, name }: AvatarProps) {
  if (avatar) {
    return (
      <img
        src={avatar}
        alt={name}
        className="h-10 w-10 rounded-full object-cover"
      />
    );
  }

  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

  return (
    <div
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        bg-gray-100
        text-sm
        font-medium
      "
    >
      {initials}
    </div>
  );
}
