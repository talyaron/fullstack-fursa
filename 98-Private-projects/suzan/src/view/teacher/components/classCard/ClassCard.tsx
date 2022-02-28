import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './ClassCard.scss';

interface classProps{
    class_name:string
}

export default function CourseCard(props:classProps) {
    const {class_name}= props;
    return (
        <Card className='card' style={{ display: 'inline-block' }}>
            <CardContent className='content'>
                <Typography variant='h6' align='center'>{class_name}</Typography>
            </CardContent>
        </Card>
    );
}
