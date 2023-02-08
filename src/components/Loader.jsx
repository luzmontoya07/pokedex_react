// un pequeño comando para cuando está cargando la página 

import { ThreeBody } from '@uiball/loaders'

export const Loader = () => {
    return (
        <div className='container-loader'>
            <ThreeBody 
             size={35}
             speed={1.1} 
             color="black" 
            />
       </div>
    )
  };
            