import supabase from "@remote/supabase";

export default function HomePage() {
  console.log(supabase);
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      hello my name is piu
    </div>
  );
}
