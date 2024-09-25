import Link from 'next/link'
import Image from 'next/image'
import Cardf from '@/components/Cardf'
import { MoveDown } from 'lucide-react'
import { Navbar } from '@/elements/navbar'
import { Skills } from '@/elements/skills'
import { GitLink } from '@/components/git-link'
import { ButtonCurriculum } from '@/components/button-curriculum'

export default function Home() {
  return (
    <main className="h-dvh">
      <Navbar />

      <div className="grid h-full grid-cols-2 max-md:grid-cols-1">
        <div className="font-mont flex flex-col items-start justify-center gap-28 pl-32 text-slate-950 max-md:gap-12 max-md:pl-6">
          <div className="flex flex-col gap-8 max-md:gap-4">
            <div>
              <h2 className="sm text-6xl font-semibold">
                <span>+</span>15
              </h2>
              <a className="text-xl font-light">Projetos finalizados</a>
            </div>
            <div>
              <h1 className="text-9xl font-bold">OLÁ</h1>
              <Link href="/" className="text-xl font-light max-md:text-base">
                - Thiago Henrique, desenvolvedor Full-Stack
              </Link>
            </div>
          </div>

          <div className="flex animate-bounce items-center hover:underline">
            <a className="text-xl font-semibold">Veja mais</a>
            <MoveDown />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 text-slate-950 max-md:items-start max-md:px-6">
          <h2 className="font-mont text-9xl font-bold underline max-md:text-8xl">
            P<span className="font-pixel">O</span>RT
          </h2>
          <h2 className="font-mont text-9xl font-bold max-md:text-8xl">
            FÓL<span className="font-type text-blue-600">;</span>O
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-3 px-32 max-md:mt-6 max-md:grid-cols-1 max-md:gap-6 max-md:px-6">
        <div className="col-span-1 flex flex-col justify-center gap-4">
          <h2 className="font-pixel flex justify-start text-4xl font-bold">
            Olá,
          </h2>
          <p className="font-mont text-justify">
            Me chamo Thiago, tenho 19 anos e atualmente estou cursando Ciência
            da Computação na PUC MINAS (Pontífica Universidade Católica de Minas
            Gerais). Sempre fui apaixonado por tecnologia, mais ainda pela parte
            de resolver problemas e inovações, por isso, comecei o meu mundo na
            programação aos meus 10 anos com meus primeiros estudos, desde
            então, me apaixonei pela área e cada dia que passa vou em busca de
            mais conhecimento e melhorias das minhas habilidades!
          </p>
        </div>

        <div className="col-span-1 flex flex-col items-center justify-center gap-2">
          <div className="flex items-center justify-center">
            <Image
              width={500}
              height={500}
              quality={100}
              src="https://github.com/Thiago-hf.png"
              alt=""
              className="size-64 rounded-full"
            />
          </div>
          <div>
            <ButtonCurriculum />
          </div>
        </div>

        <Skills />
      </div>

      <div className="grid py-28 max-md:grid-cols-1 max-md:px-6 max-md:py-8">
        <div className="flex flex-col items-center justify-center gap-10">
          <h2 className="font-mont text-2xl underline underline-offset-4">
            <span className="font-type text-2xl">A</span>lguns Projetos
          </h2>

          <div className="flex gap-6 max-md:flex-col">
            <aside className="static w-full max-w-lg rounded-lg bg-white p-6 font-mono text-black drop-shadow-2xl max-md:flex max-md:flex-col">
              <div className="flex items-center justify-between">
                <div className="flex space-x-2 text-red-500">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <p className="text-sm">bash</p>
              </div>
              <div className="mt-4">
                <p className="text-blue-500">Cuidadoso</p>
                <br />
                <p className="text-black">
                  Cuidadoso é uma plataforma construída por uma equipe de
                  estudantes do Senai com o intuito de ligar cuidadores de
                  idosos a quem necessita deles!
                </p>
                <br />
                <p className="text-green-400">
                  <GitLink url={'https://github.com/Thiago-hf/Cuidadoso'} />
                </p>
              </div>
            </aside>

            <aside className="static w-full max-w-lg rounded-lg bg-white p-6 font-mono text-black drop-shadow-2xl">
              <div className="flex items-center justify-between">
                <div className="flex space-x-2 text-red-500">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <p className="text-sm">bash</p>
              </div>
              <div className="mt-4">
                <p className="text-blue-500">ChatBot</p>
                <br />
                <p className="text-black">
                  ChatBot criado por mim utilizando a OpenAI API{' '}
                </p>
                <br />
                <p className="text-green-400">
                  <GitLink url={'https://github.com/Thiago-hf/ChatBot'} />
                </p>
              </div>
            </aside>
          </div>

          <div className="flex flex-row items-center justify-center">
            <aside className="static w-full max-w-lg rounded-lg bg-white p-6 font-mono text-black drop-shadow-2xl">
              <div className="flex items-center justify-between">
                <div className="flex space-x-2 text-red-500">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <p className="text-sm">bash</p>
              </div>
              <div className="mt-4">
                <p className="text-blue-500">BipBus</p>
                <br />
                <p className="text-black">
                  BipBus é um aplicativo móvel que avisa quando seu ponto de
                  ônibus está próximo.
                  <br />
                  Com rastreamento GPS em tempo real e notificações
                  personalizáveis, garante que você nunca perca sua parada.{' '}
                  <br />
                  Simples de usar e confiável, o BipBus é o companheiro de
                  viagem perfeito para deslocamentos sem estresse.{' '}
                </p>
                <br />
                <p className="text-green-400">
                  <GitLink url={'https://github.com/Thiago-hf/BipBus'} />
                </p>
              </div>
            </aside>
          </div>

          <div className="absolute mb-10 drop-shadow-md max-md:relative">
            <Cardf />
          </div>
        </div>
      </div>

      <div className="flex h-1/6 flex-col items-center justify-center">
        <h2 className="font-mont text-black opacity-20">
          Thiago Henrique Figueredo de OLiveira
        </h2>
        <h2 className="font-mont text-black opacity-20">
          Todos os direitos reservados.
        </h2>
      </div>
    </main>
  )
}
