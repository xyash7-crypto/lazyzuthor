import { createClient } from "@/lib/supabase/server";
import { DrawingCanvas } from "@/components/DrawingCanvas";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ExistingCanvasPage({ params }: PageProps) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: scribble, error } = await supabase
    .from("scribbles")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !scribble) {
    notFound();
  }

  return (
    <DrawingCanvas
      scribbleId={scribble.id}
      initialStrokes={scribble.strokes || []}
      initialTitle={scribble.title}
    />
  );
}
