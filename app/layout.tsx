import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PlagiarismGuard – Detect Student Assignment Plagiarism Instantly',
  description: 'Compare student submissions against web content and previous submissions to flag potential plagiarism. Built for K-12 teachers and college professors.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6749ceb5-a33c-4ede-a22d-a7c1462971ef"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
