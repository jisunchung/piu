import Flex from "./Flex";

export default function Avatar({ username }: { username: string }) {
  return (
    <Flex
      justify="center"
      align="center"
      className="h-10 w-10 overflow-hidden rounded-full bg-(--color-secondary) shadow-md hover:cursor-pointer hover:opacity-80"
    >
      <p className="font-extrabold text-(--color-neutral)">{username[0]}</p>
    </Flex>
  );
}
