export default function Page() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-slate-50 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 pb-2">
            <h1 className="text-2xl font-bold text-slate-900">
              Thank you for signing up!
            </h1>
            <p className="text-sm text-slate-500 mt-1">Check your email to confirm</p>
          </div>
          <div className="p-6 pt-4">
            <p className="text-sm text-slate-600">
              {"You've successfully signed up. Please check your email to confirm your account before signing in."}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
