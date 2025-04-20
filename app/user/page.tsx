import RequestQuoteForm from '@/components/main/requestQuoteForm'

export default function UserPage() {
  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Request a Quote</h1>
      <RequestQuoteForm />
    </main>
  )
}