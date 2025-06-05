


export const Header = ({title, subtitle}: {title: string, subtitle?: string}) => {
  

  
  
  return (
    <>
     <h2
        className="text-dark-600 h2-bold"
     >{title}</h2>
     {subtitle && <p className="mt-4 p-16-regular">{subtitle}</p>}
    </>
  )
}