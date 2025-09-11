import Flex from "@shared/Flex";
import { GooeyText } from "@shared/GooeyText";

export default function StartSection() {
  return (
    <Flex align="center" justify="center" direction="col" className="h-screen">
      <GooeyText
        texts={["Hello", "My name is", "piu"]}
        morphTime={1.5}
        cooldownTime={0.5}
        textClassName="font-bold whitespace-nowrap text-(--color-primary) text-7xl"
      />
    </Flex>
  );
}
