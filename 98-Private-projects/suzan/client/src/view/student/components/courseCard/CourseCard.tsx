import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useAppDispatch } from '../../../../app/hooks';
import { select } from '../../../../app/reducers/student/CourseCardSlice';
import './CourseCard.scss';

interface CourseCardProps {
    info: {
        name: string
        firstName: string
        lastName: string
    }

}

export default function CourseCard(props: CourseCardProps) {
    const { name, firstName, lastName } = props.info;
    const teacher = firstName.concat(' ', lastName);
    const dispatch = useAppDispatch();

    function handleClick(){
        dispatch(select([name, teacher]));
    }

    return (
        <Card className='card' style={{ display: 'inline-block' }} onClick={handleClick}>
            <CardContent className='content'>
                <Typography variant='h6' align='center'>{name}</Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" align='center'>{teacher}</Typography>
            </CardContent>
        </Card>
    );
}
