import * as Styled from './styles';
import { Heading } from '../../components/Heading';
import { Text } from '../../components/TextComponent';
import {Base} from '../Base';
import { mockBase } from '../Base/mock';

function App() {
  return <Base {...mockBase} />;
}

export default App;
