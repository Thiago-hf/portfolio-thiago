import Link from 'next/link'
import { CircleCheck } from 'lucide-react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

export function Navbar() {
  return (
    <header className="flex h-20 items-center justify-between gap-4 px-32 text-slate-950 max-md:px-28 max-sm:px-6">
      <nav>
        <ul className="font-mont flex items-center gap-4">
          <Link href="/">
            <li>Sobre mim</li>
          </Link>

          <Link href="/">
            <li>Projetos</li>
          </Link>
        </ul>
      </nav>

      <Dialog>
        <DialogTrigger className="font-mont text-slate-950">
          Contato
        </DialogTrigger>
        <DialogContent>
          <div className="flex flex-row items-center gap-3">
            <CircleCheck className="w-5" />
            <h2 className="font-mont">Contato: (31) 99883-6697</h2>
          </div>

          <div className="flex flex-row items-center gap-3">
            <CircleCheck className="w-5" />
            <h2 className="font-mont">E-mail: thiagohfdeoliveira@gmail.com</h2>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  )
}
