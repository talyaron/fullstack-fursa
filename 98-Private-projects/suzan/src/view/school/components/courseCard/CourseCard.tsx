import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './CourseCard.scss';

interface CourseCardProps {
    info: {
        name: string
        teacher: string
    }

}

export default function CourseCard(props: CourseCardProps) {
    const { name, teacher } = props.info;
    return (
        <Card className='card' style={{ display: 'inline-block' }}>
            <CardContent className='content'>
                <Typography variant='h6' align='center'>{name}</Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" align='center'>{teacher}</Typography>
            </CardContent>
        </Card>
    );
}
