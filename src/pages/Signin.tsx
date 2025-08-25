import useGoogleSignin from "@/hooks/useGoogleSignin";

export default function SigninPage() {
  const { signin } = useGoogleSignin();
  return (
    <div>
      <button onClick={signin}>Sign in with Google</button>
    </div>
  );
}
