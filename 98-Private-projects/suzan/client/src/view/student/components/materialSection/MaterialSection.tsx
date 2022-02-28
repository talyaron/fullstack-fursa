import Typography from '@mui/material/Typography';
import react from 'react-router-dom';
// import './MaterialSection.scss';

interface MaterialProps {
    title: string;
    description: string;
}

export default function MaterialSection(props: MaterialProps) {
    const {title, description} = props;
    return (
        
        <div className='material'>
            <Typography variant='h5' >{title}</Typography>
            <Typography variant='body1' >{description}</Typography>
        </div>
    );
}