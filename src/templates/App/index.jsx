import * as Styled from './styles';
import { Heading } from '../../components/Heading';
import { Text } from '../../components/TextComponent';
import {Base} from '../Base';
import { mockBase } from '../Base/mock';
import { useEffect, useState } from 'react';
import { mapData } from '../../api/general/map-data';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';

function App() {
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const load = async () => {
      try{
        const data = await fetch('http://localhost:1337/api/pages/2/?populate=*');
        const json = await data.json();
        const processedData = [json.data.attributes];
        const pageData = mapData(processedData);
        setData(pageData[0]);

      } catch (e){
        setData(undefined);
        setErrorMessage(e.message);
      }
    }

    load();
  }, []);

  if(data === undefined){
    return <PageNotFound errorMessage={errorMessage}/>
  }

  if(data && !data.slug){
    return <Loading />
  }

  return <Base {...mockBase} />;
}

export default App;
