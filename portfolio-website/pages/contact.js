import { useRouter } from 'next/router';

export default function Contact() {
  const router = useRouter();

  const handleBack = () => {
      router.back();
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-transparent">
      <div className="max-w-xl w-full text-center z-40 relative">
        <button
          onClick={handleBack}
          aria-label="Go back"
          className="fixed left-4 top-4 inline-flex items-center justify-center w-12 h-12 bg-white/8 dark:bg-black/20 backdrop-blur-md border
          border-white/10 dark:border-white/6 rounded-xl p-2 ring-1 ring-blue-400/20 dark:ring-red-400/20 hover:scale-105 transition-transform duration-150 z-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="crystal-box p-8">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">Contact Me</h1>
          <p className="text-gray-700 dark:text-gray-300 mb-6">Thanks for stopping by! I'd love to hear from you. Use the links below or send an email to
            <a className="text-blue-600 dark:text-blue-400 underline" href="mailto:hello@example.com">harryjunior2026@gmail.com</a>.</p>
          <div className="flex justify-center gap-4"></div>
        </div>
      </div>
    </main>
  );
}
