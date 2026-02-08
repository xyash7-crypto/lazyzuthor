export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ error: string }>
}) {
  const params = await searchParams

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-slate-50 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 pb-2">
            <h1 className="text-2xl font-bold text-slate-900">
              Sorry, something went wrong.
            </h1>
          </div>
          <div className="p-6 pt-4">
            {params?.error ? (
              <p className="text-sm text-slate-600">
                Code error: {params.error}
              </p>
            ) : (
              <p className="text-sm text-slate-600">
                An unspecified error occurred.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
