import { Component, type ErrorInfo, type ReactNode } from "react";
import Button from "./ui/Button";

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

// React error boundaries must be class components - there is currently no
// hook equivalent for catching render errors in child components. Without
// this, any unexpected crash (e.g. bad or missing data) shows a totally
// blank white screen with no way for the student to recover - this catches
// that and shows a friendly recovery screen instead.
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // In production this is where you'd send the error to a monitoring
    // service (e.g. Sentry) - logging to console for now since there's no
    // monitoring service wired up yet.
    console.error("Campus Bridge crashed:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-sand-25 px-6 text-center dark:bg-sand-900">
          <h1 className="text-3xl font-bold text-sand-900 dark:text-white">Something went wrong</h1>
          <p className="mt-3 max-w-sm text-sand-600 dark:text-sand-400">
            An unexpected error occurred. Try reloading the page - if this keeps happening, let us know.
          </p>
          <div className="mt-6">
            <Button onClick={() => window.location.reload()}>Reload page</Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
