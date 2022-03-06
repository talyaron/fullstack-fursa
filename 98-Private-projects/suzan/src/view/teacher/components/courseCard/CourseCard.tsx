import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useAppDispatch } from '../../../../app/hooks';
import { select } from '../../../../app/reducers/teacher/CourseCardSlice';
import './CourseCard.scss';

interface CourseCardProps {
    info: {
        name: string
        class_name: string
    }

}

export default function CourseCard(props: CourseCardProps) {
    const { name, class_name } = props.info;
    const dispatch = useAppDispatch();

    function handleClick(){
        dispatch(select([name, class_name]));
    }
    
    return (
        <Card className='card' style={{ display: 'inline-block' }} onClick={handleClick}>
            <CardContent className='content'>
                <Typography variant='h6' align='center'>{name}</Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" align='center'>{class_name}</Typography>
            </CardContent>
        </Card>
    );
}
