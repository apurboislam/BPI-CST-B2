import { Suspense } from 'react'
import ClassRoutine from '@/components/class-routine'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from '@/components/ErrorFallback';


// function ErrorFallback({error}: {error: Error}) {
//   return (
//     <div className="text-center py-10 text-red-500">
//       <p>Something went wrong:</p>
//       <pre>{error.message}</pre>
//     </div>
//   )
// }

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow p-4">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
            <ClassRoutine />
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  )
}

