import Button from "@components/shared/Button";
import Flex from "@components/shared/Flex";
import useGoogleSignin from "@hooks/useGoogleSignin";

export default function MyPage() {
  const { signout } = useGoogleSignin();
  return (
    <Flex align="center" justify="center" className="h-screen gap-4">
      <Button onClick={signout}>Sign out</Button>
    </Flex>
  );
}
