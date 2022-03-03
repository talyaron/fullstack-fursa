import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

interface Update {
    update: string
}
interface UpdatesArray {
    updates: Array<Update>
}

export default function UpdatesList(updatesArray: UpdatesArray) {
    const { updates } = updatesArray;

    return (
        <div>
            <List dense={true}>
                {
                    updates.map((update1, i) => {
                        const {update} = update1;
                        return (
                            <ListItem key={i}>
                                <ListItemText
                                    className='studentsList__listItem__text'
                                    primary={update}
                                />
                            </ListItem>
                        );

                    })
                }
            </List>
        </div>
    );
}