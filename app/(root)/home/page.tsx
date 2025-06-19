import { Collection } from "@/components/shared/Collection"
import { navLinks } from "@/constants"
import { getAllImages } from "@/lib/actions/image.actions"
import { SearchParamProps } from "@/types"
import Image from "next/image"
import Link from "next/link"

const HomePage = async ({ searchParams}: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1
  const searchQuery = (searchParams?.query as string) || ''

  const images = await getAllImages({ page, searchQuery})
  
  return (
    <>
      <section className="home">
        <h1 className="home-heading">
          Unleash Your Creative Vision with Imaginify
        </h1>

        <ul className="flex-center gap-20 w-full">
          {navLinks.slice(1,5).map( link => (
            <Link
              key={link.route}
              href={link.route}
              className="flex-col flex-center gap-2"
            >
              <li className="flex-center bg-white p-4 rounded-full w-fit hover:scale-110 transition-transform">
                <Image 
                  src={link.icon}
                  width={24}
                  height={24}
                  alt="image"
                />
              </li>
              <p className="p-14-medium text-white text-center">{link.label}</p>
            </Link>
          ))}
        </ul>


      </section>

      <section className="sm:mt-12" >
        <Collection 
          images={images?.data}
          page={page}
          totalPages={images?.totalPage}
          hasSearch={true}
        />

      </section>
    </>
  )
}

export default HomePage