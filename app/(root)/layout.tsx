import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import { Toaster } from '@/components/ui/sonner'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <Sidebar />
      <MobileNav />

      <div className="root-container">
        <div className="wrapper">
          {children}
        </div>
        <div 
          className='flex flex-wrap justify-center mt-8 py-1 w-full'
        >
          <p>Developed by 
            <a href="https://daniel-merchan.vercel.app/" target='_blank'
              className='bg-clip-text bg-gradient-to-br from-orange-500 hover:from-orange-700 to-purple-500 hover:to-purple-700 font-semibold text-transparent transition-colors'
            > Daniel Merchan </a>
          
          </p>


        </div>
      </div>
      <Toaster
        richColors={true}
        position='top-right'
      />
    </main>
  )
}

export default Layout