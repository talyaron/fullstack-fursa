import { SideBarMenu } from "./view/components/pages/menu/SideBarMenu";
import { SideBarMenuCard, SideBarMenuItem } from "./types/types.d";
import {
  FcAdvertising,
  FcEngineering,
  FcIdea,
  FcHome,
  FcInfo,
} from 'react-icons/fc';

import profileImage from './view/images/saleem.jpg';

import './App.css';

function App() {
  const items: SideBarMenuItem[] = [
    {
      id: '1',
      label: 'Home',
      icon: FcHome,
      url: '/',
    },
    {
      id: '2',
      label: 'assignmenst',
      icon: FcIdea,
      url: '/',
    },
    {
      id: '3',
      label: 'Notes',
      icon: FcAdvertising,
      url: '/',
    },
    {
      id: '4',
      label: 'Information',
      icon: FcInfo,
      url: '/',
    },
    {
      id: '5',
      label: 'settings',
      icon: FcEngineering,
      url: '/',
    },
  ];

  const card: SideBarMenuCard = {
    id: 'card01',
    displayName: 'saleem sbehe',
    title: 'react devolper',
    photoUrl: profileImage,
    url: '/',
  }
  return (
    <div className='wrapper'>
      <SideBarMenu items={items} card={card} />
    </div>
  );
}

export default App;
