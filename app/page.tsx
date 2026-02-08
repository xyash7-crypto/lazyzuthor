import Link from "next/link";
import { ArrowRight, Pen, Clock, Cloud } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Pen className="w-6 h-6 text-slate-900" />
              <span className="text-xl font-semibold text-slate-900">LazyWriting</span>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/auth/login"
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
              >
                Login
              </Link>
              <Link
                href="/auth/sign-up"
                className="px-4 py-2 text-sm font-medium bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-8 text-balance">
            Because the people who are{" "}
            <span className="text-slate-600 italic">lazy enough</span> to think
            they can change the world,{" "}
            <span className="relative inline-block">
              <span className="relative z-10">are the ones who do.</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-slate-200 -rotate-1"></span>
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            An infinite canvas for your thoughts. Draw, scribble, and let your ideas flow without boundaries.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/auth/sign-up"
              className="group px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold text-lg hover:bg-slate-800 transition-all hover:scale-105 flex items-center gap-2"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/auth/login"
              className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-xl font-semibold text-lg hover:border-slate-300 transition-all hover:scale-105"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 mb-16 text-balance">
            Effortless creativity, infinite possibilities
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-6">
                <Pen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Infinite Canvas
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Never run out of space. Your canvas scrolls endlessly as you draw, letting ideas flow naturally.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-6">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Auto-Save Everything
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Every stroke is automatically saved. Focus on creating, not on remembering to save.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Organized by Time
              </h3>
              <p className="text-slate-600 leading-relaxed">
                All your scribbles are automatically named and organized by date and time created.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 text-balance">
            Start creating today
          </h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Join thousands of lazy thinkers who are changing the world, one scribble at a time.
          </p>
          <Link
            href="/auth/sign-up"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold text-lg hover:bg-slate-800 transition-all hover:scale-105"
          >
            Get Started Free
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto text-center text-slate-600">
          <p>&copy; 2024 LazyWriting. For the lazy thinkers.</p>
        </div>
      </footer>
    </div>
  );
}
