import Link from 'next/link'

const LinksCardF: React.FC = () => {
  return (
    <div className="flex space-x-4">
      <Link href="https://github.com/Thiago-hf" target="_blank">
        <svg
          stroke="currentColor"
          viewBox="0 0 24 24"
          className="w-4 duration-200 hover:scale-125 hover:cursor-pointer"
          fill="white"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      </Link>

      <Link
        href="https://www.linkedin.com/in/thiago-henrique-figueredo-de-oliveira-6a67372b6/"
        target="_blank"
      >
        <svg
          stroke="currentColor"
          viewBox="0 0 24 24"
          className="w-4 duration-200 hover:scale-125 hover:cursor-pointer"
          fill="white"
        >
          <path d="M21.15 0H2.85C1.28 0 0 .9 0 2.01v19.97C0 23.1 1.28 24 2.85 24h18.3C22.72 24 24 23.1 24 21.98V2.01C24 .9 22.72 0 21.15 0zM7.13 20.45H3.56V9h3.57v11.45zM5.85 7.8c-1.14 0-2.06-.93-2.06-2.08 0-1.15.93-2.08 2.07-2.08 1.13 0 2.06.93 2.06 2.08 0 1.15-.93 2.08-2.06 2.08zm15.6 12.65h-3.57v-5.75c0-1.37-.03-3.13-1.9-3.13-1.91 0-2.2 1.49-2.2 3.02v5.86h-3.56V9h3.42v1.55h.05c.48-.9 1.66-1.84 3.42-1.84 3.67 0 4.34 2.43 4.34 5.6v6.14z" />
        </svg>
      </Link>
    </div>
  )
}

export default LinksCardF
