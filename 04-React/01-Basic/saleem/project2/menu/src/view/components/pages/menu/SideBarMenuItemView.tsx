import { SideBarMenuItem } from "../../../../types/types.d";
import { classNames } from '../../../../util/classes';

import './SideBarMenuItem.scss';
interface SideBarMenuItemViewProps {
    item: SideBarMenuItem;
    isOpen: boolean;
}

export default function SideBarMenuItemView({ item, isOpen }: SideBarMenuItemViewProps) {
    return <div className='SideBarMenuItemView'>
        <a href={item.url}>
            <div className={classNames('ItemContent', isOpen ? '' : 'collapsed')}>
                <div className='icon'>
                    <item.icon size='32' />
                </div>
                <span className='label'>{item.label}</span>
            </div>
        </a>
        {!isOpen ? <div className='toolbox'>{item.label}</div> : ''}
    </div>
}