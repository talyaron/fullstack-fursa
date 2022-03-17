import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './ClassCard.scss';
import { useAppDispatch } from '../../../../app/hooks';
import { select } from '../../../../app/reducers/school/ClassCardSlice';
import { getCoursesAsync, getStudentsAsync, getTeachersAsync } from '../../../../app/reducers/school/ClassDetailsSlice';
import { getSelectedClassByIdAsync } from '../../../../app/reducers/school/SchoolSlice';

interface ClassCardProps {
    info: {
        id: number
        name: string
        firstName: string
        lastName: string
    }

}

export default function ClassCard(props: ClassCardProps) {
    const { id, name, firstName, lastName } = props.info;
    const teacher = firstName.concat(' ', lastName);
    const dispatch = useAppDispatch();

    function handleClick() {
        dispatch(select([name, teacher, id]));
        dispatch(getSelectedClassByIdAsync(id));
        // dispatch(getCoursesAsync());
        // dispatch(getStudentsAsync());
        // dispatch(getTeachersAsync());
    };

    return (
        <Card className='card' style={{ display: 'inline-block' }} onClick={handleClick}>
            <CardContent className='content'>
                <Typography variant='h6' align='center'>{name}</Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" align='center'>{teacher}</Typography>
            </CardContent>
        </Card>
    );
}
