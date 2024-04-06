import Navigation from "./components/navigation";

export default function Home() {
  return (
    <main className="w-full h-dvh flex items-center justify-center">
      <div className="flex gap-40 justify-center items-center">
        <Navigation href="/auth">Auth Page</Navigation>
        <Navigation href="/main">Main Page</Navigation>
      </div>
    </main>
  );
}
