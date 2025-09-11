import Button from "./Button";
import Flex from "./Flex";

export default function NavBar() {
  return (
    <Flex className="fixed top-0 right-0 left-0 z-10 h-20 bg-blue-300 shadow-md">
      <Flex align="center" justify="between" className="w-full px-10">
        <a href="/" className="text-white">
          Logo
        </a>

        <div className="space-x-4">
          <a href="/beginner" className="text-white">
            Beginner
          </a>
          <a href="/intermediate" className="text-white">
            Intermediate
          </a>
          <a href="/advanced" className="text-white">
            Advanced
          </a>
        </div>
        <Button>get started</Button>
      </Flex>
    </Flex>
  );
}
