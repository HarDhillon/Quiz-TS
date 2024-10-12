
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`h-lvh ${nunito.className}`}>
      <header className="flex justify-center">
        <h1 className="mt-5 text-3xl">Quiz</h1>
      </header>
      <section className="flex justify-center h-full items-center">
        <p>Select options to continue</p>
      </section>
    </main>
  );
}
