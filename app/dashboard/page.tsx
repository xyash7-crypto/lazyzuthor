import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { Plus, Pen, LogOut } from "lucide-react";
import { ScribbleCard } from "@/components/ScribbleCard";
import { SignOutButton } from "@/components/SignOutButton";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  // Fetch user's scribbles
  const { data: scribbles, error } = await supabase
    .from("scribbles")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("[v0] Error fetching scribbles:", error);
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Pen className="w-6 h-6 text-slate-900" />
              <span className="text-xl font-semibold text-slate-900">LazyWriting</span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/canvas"
                className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                <Plus className="w-4 h-4" />
                New Scribble
              </Link>
              <SignOutButton />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Your Scribbles</h1>
          <p className="text-slate-600">
            {scribbles?.length || 0} {scribbles?.length === 1 ? "scribble" : "scribbles"} saved
          </p>
        </div>

        {/* Scribbles Grid */}
        {!scribbles || scribbles.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Pen className="w-10 h-10 text-slate-400" />
            </div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">No scribbles yet</h2>
            <p className="text-slate-600 mb-8">Start creating your first infinite canvas masterpiece</p>
            <Link
              href="/canvas"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Create Your First Scribble
            </Link>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {scribbles.map((scribble) => (
              <ScribbleCard key={scribble.id} scribble={scribble} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
