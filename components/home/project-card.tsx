import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  id: number
  title: string
  image: string
  slug: string
  category: string
  location?: string
}

export default function ProjectCard({ id, title, image, slug, category, location }: ProjectCardProps) {
  return (
    <Link href={`/projetos/${slug}`} className="block h-full">
      <div className="group relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 hover:bg-black/30 duration-700 z-10"></div>
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
          <span className="text-sm uppercase tracking-wider font-light mb-1 block">{category}</span>
          <h3 className="text-xl font-light uppercase tracking-wider mb-1">{title}</h3>
          {location && <p className="text-sm font-light">{location}</p>}
        </div>
      </div>
    </Link>
  )
}
