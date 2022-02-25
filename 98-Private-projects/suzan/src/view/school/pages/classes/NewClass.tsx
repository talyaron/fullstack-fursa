import Button from '@mui/material/Button';
import react from 'react-router-dom';
import SchoolResponsiveAppBar from '../../components/header/AppBar';
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import './NewClass.scss';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const teachers = [
    { label: 'Suzan Kassabry' },
    { label: 'Lama Bisharat' },
    { label: 'Rania Ateek' }
]

const students = [
    { name: 'Suzan Kassabry 1' }, { name: 'Suzan Kassabry 2' }, { name: 'Suzan Kassabry 3' }, { name: 'Suzan Kassabry 4' },
    { name: 'Suzan Kassabry 5' }, { name: 'Suzan Kassabry 6' }, { name: 'Suzan Kassabry 7' }, { name: 'Suzan Kassabry 8' }
]

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function NewClass() {
    return (
        <div className='container'>

            <div className="bar">
                <SchoolResponsiveAppBar></SchoolResponsiveAppBar>
            </div>

            <div className="subContainer">
                <Button className='createClassBtn' variant="contained" size='small'>
                    Submit
                </Button>

                <div className="newClass">
                    <div className="newClass__section">
                        <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
                            Class name:
                        </Typography>
                        <TextField
                            required
                            id="outlined-required"
                            label="Class name required"
                            size='small'
                            className='inputField'
                        />
                    </div>

                    <div className="newClass__section">
                        <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
                            Teacher:
                        </Typography>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={teachers}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="select or serch for teacher" />}
                            size="small"
                            className='inputField'
                        />
                    </div>

                    <div className="newClass__section">
                        <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
                            select the students:
                        </Typography>
                        <Autocomplete
                            multiple
                            id="checkboxes-tags-demo"
                            options={students}
                            disableCloseOnSelect
                            getOptionLabel={(option) => option.name}
                            renderOption={(props, option, { selected }) => (
                                <li {...props}>
                                    <Checkbox
                                        icon={icon}
                                        checkedIcon={checkedIcon}
                                        style={{ marginRight: 8 }}
                                        checked={selected}
                                    />
                                    {option.name}
                                </li>
                            )}
                            style={{ width: 500 }}
                            renderInput={(params) => (
                                <TextField {...params} label="select or search students" placeholder="Favorites" />
                            )}
                            size="small"
                            className='inputField'
                        />
                    </div>
                </div>

            </div>



        </div>
    );
}