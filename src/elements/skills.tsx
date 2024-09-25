import { Progress } from '@/components/ui/progress'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { MoveRight } from 'lucide-react'

export function Skills() {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-4 max-md:mt-6 max-md:items-center">
      <h2 className="font-type pb-4 text-2xl underline underline-offset-4">
        Algumas habilidades!
      </h2>

      <div className="flex w-full flex-col">
        <div className="grid-col-2 grid">
          <div className="flex w-full flex-row">
            <div>
              <span className="font-mont">HTML | CSS</span>
            </div>
            <div className="flex h-full w-full justify-end text-slate-500">
              <span className="font-mont">Avançado</span>
            </div>
          </div>
        </div>
        <Progress value={90} className="w-96 max-sm:w-full" />
      </div>

      <div className="flex w-full flex-col">
        <div className="grid-col-2 grid">
          <div className="flex flex-row">
            <div className="h-full w-full">
              <span className="font-mont">Bootstrap | Tailwind</span>
            </div>
            <div className="flex h-full w-full justify-end text-slate-500">
              <span className="font-mont">Avançado</span>
            </div>
          </div>
        </div>
        <Progress value={90} className="w-96 max-sm:w-full" />
      </div>

      <div className="flex w-full flex-col">
        <div className="grid-col-2 grid">
          <div className="flex flex-row">
            <div className="h-full w-full">
              <span className="font-mont">React Native Expo</span>
            </div>
            <div className="flex h-full w-full justify-end text-slate-500">
              <span className="font-mont">Intermediário</span>
            </div>
          </div>
        </div>
        <Progress value={66} className="w-96 max-sm:w-full" />
      </div>

      <div className="flex w-full flex-col">
        <div className="grid-col-2 grid">
          <div className="flex flex-row">
            <div className="h-full w-full">
              <a className="font-mont">Python</a>
            </div>
            <div className="flex h-full w-full justify-end text-slate-500">
              <a className="font-mont">Intermediário</a>
            </div>
          </div>
        </div>
        <Progress value={66} className="w-96 max-sm:w-full" />
      </div>

      <div className="flex w-full flex-col">
        <div className="grid-col-2 grid">
          <div className="flex flex-row">
            <div className="h-full w-full">
              <a className="font-mont">MySQL</a>
            </div>
            <div className="flex h-full w-full justify-end text-slate-500">
              <a className="font-mont">Intermediário</a>
            </div>
          </div>
        </div>
        <Progress value={66} className="w-96 max-sm:w-full" />
      </div>

      <div className="flex w-full flex-col">
        <div className="grid-col-2 grid">
          <div className="flex flex-row">
            <div className="h-full w-full">
              <a className="font-mont">Typescript</a>
            </div>
            <div className="flex h-full w-full justify-end text-slate-500">
              <a className="font-mont">Iniciante</a>
            </div>
          </div>
        </div>
        <Progress value={33} className="w-96 max-sm:w-full" />
      </div>

      <div className="flex w-full flex-col">
        <div className="grid-col-2 grid">
          <div className="flex flex-row">
            <div className="h-full w-full">
              <a className="font-mont">Next.js</a>
            </div>
            <div className="flex h-full w-full justify-end text-slate-500">
              <a className="font-mont">Iniciante</a>
            </div>
          </div>
        </div>
        <Progress value={33} className="w-96 max-sm:w-full" />
      </div>

      <div className="flex flex-row gap-4">
        <MoveRight />

        <Dialog>
          <DialogTrigger className="font-mont">
            Informações adicionais
          </DialogTrigger>
          <DialogContent>
            <div className="flex flex-row items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h1 className="font-mont">Contato: (31) 99883-6697</h1>
            </div>

            <div className="flex flex-row items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h1 className="font-mont">
                E-mail: thiagohfdeoliveira@gmail.com
              </h1>
            </div>

            <div className="flex flex-row items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h1 className="font-mont">
                Técnico em Análise e Desenvolvimeto de Sistemas - Senai
              </h1>
            </div>

            <div className="flex flex-row items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h1 className="font-mont">Inglês Intermediário</h1>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
