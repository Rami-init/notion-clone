import { Badge } from "@repo/ui";

export default function Page(): JSX.Element {
  return (
    <main className="flex h-screen w-screen items-center justify-center bg-slate-900">
      <Badge color="secondary" variant="outlined">
        Badge
      </Badge>
    </main>
  );
}
