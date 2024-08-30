import React from 'react'

const Footer = () => {
  let FooterData=[
    {heading:"Technology",link1:"Injection Molding",link2:"Injection Blow Molding",link3:"Extrusion Blow Molding",link4:"ISBM",link5:"Decoration"},
    {heading:"Sustainbility",link1:"Sustainability Statement",link2:"CDP report",link3:"Walmart sustainability partner",link4:"Sustainable Packaging",link5:""},
    {heading:"Who we are",link1:"About Us",link2:"President's Message",link3:"Milestones",link4:"Vision",5:""},
    {heading:"More Link",link1:"Innovation",link2:"Quality Standards",link3:"Products",link4:"Contact Us",link5:""},

  ]
  return (
    <div>
      {
        FooterData.map((element)=>
        {
          return <>
          <div className='container mx-auto bg-slate-900 text-white'>
            <div className=''>
            <h1 className='text-red-500 font-normal text-2xl'>{element.heading}</h1>
              <p>{element.link1}</p>
              <p>{element.link2}</p>
              <p>{element.link3}</p>
              <p>{element.link4}</p>
              <p>{element.link5}</p>
            </div>
             
          </div>
          </>
        })
      }
    </div>
  )
}

export default Footer
