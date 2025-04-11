import {useContext} from 'react';
import { DataContext } from 'src/app/appProvider';
import { DataContextProps } from "@/types/datacontext.types";


export const useDataContext = () : DataContextProps => {
  
  const context = useContext(DataContext);

  if(!context) {
    throw new Error('useDataContext must be used within a DataProvider');
  }

 return context

}