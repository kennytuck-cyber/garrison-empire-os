import Link from "next/link";
import { siteContent } from "../siteContent";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Real Estate Insights</h1>
        <p className="text-xl text-slate-300">
          News, updates, and resources for Florida homeowners.
        </p>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="p-12 bg-white rounded-xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Coming Soon</h2>
            <p className="text-slate-600 mb-8">
              We are currently compiling helpful articles about the Florida real estate market, 
              probate processes, and military relocation tips. Check back shortly.
            </p>
            <Link 
              href="/" 
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Return Home
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Contact */}
      <section className="bg-slate-100 py-12 text-center">
        <p className="text-slate-600">
          Need immediate assistance? Call us at <span className="font-bold text-slate-900">{siteContent.contact.phone}</span>
        </p>
      </section>
    </main>
  );
}
