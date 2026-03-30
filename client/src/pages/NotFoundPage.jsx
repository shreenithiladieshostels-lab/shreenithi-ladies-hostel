import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-5">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-extrabold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold text-accent mb-3">Page Not Found</h2>
        <p className="text-gray-medium mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}
