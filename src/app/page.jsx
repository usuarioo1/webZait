import Link from 'next/link'
import CardService from '../components/CardServices'
import Conceptos from '@/components/Concepts'
import SplitText from '@/components/split'
import BlurText from '@/components/Blur'

const page = () => {
  return (
    <div>
      <SplitText />
      <BlurText />
      <div className="mt-12 flex flex-col items-center justify-center gap-4 px-6 sm:flex-row">
        <Link href="/contacto" className="btn-primary w-full sm:w-auto">
          Solicitar cotización
        </Link>
        <a href="#servicios" className="btn-outline w-full sm:w-auto">
          Ver servicios
        </a>
      </div>
      <CardService />
      <Conceptos />
    </div>
  )
}

export default page
