
import SixPack from '@/ui/SixPack/SixPack';
import Popularity from '@/ui/Popularity/Popularity';
import Activities from '@/ui/Activities/Activities';

import '@/styles/components/Bento.scss'


const DataBento = () => {


  return(
    <>
      <div className="lodges-layout">

        <SixPack />

        <Popularity />
        
        <Activities />
        
      </div>
    </>
  )
}
export default DataBento