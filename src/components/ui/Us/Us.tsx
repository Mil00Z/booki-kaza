import PanelTube from "@/ui/PanelTube/PanelTube"

import '@/styles/components/Us.scss'


const Us = () =>{

  const softskills = [
    {
      title: "Fiabilité",
      description: "La capacité à être fiable et à tenir ses engagements",
    },
    {
      title: "Responsabilité",
      description: "La capacité à prendre des responsabilités et à assumer ses actes",
    },
    {
      title: "Respect",
      description: "La capacité à respecter les autres et à être courtois",
    },
    {
      title: "Service",
      description: "La capacité à respecter les autres et à être courtois",
    },
    {
      title: "Sécurité",
      description: "La capacité à respecter les autres et à être courtois",
    }
  ];

  
  return (
    <section className="us">
      
      {softskills.map((softskill,index) => {
      
        return(
          <PanelTube key={`tube-${index}`} title={softskill.title} description={softskill.description} annoncePanel={false}/>
        )

      })}
   
    </section>
  )
}

export default Us