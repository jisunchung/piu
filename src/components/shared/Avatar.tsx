import Flex from "./Flex";

export default function Avatar({ username }: { username: string }) {
  return (
    <Flex
      justify="center"
      align="center"
      className="bg-secondary h-10 w-10 overflow-hidden rounded-full shadow-md hover:cursor-pointer hover:opacity-80"
    >
      <p className="text-neutral font-extrabold">{username[0]}</p>
    </Flex>
  );
}
