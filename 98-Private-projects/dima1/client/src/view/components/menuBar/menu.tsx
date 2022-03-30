import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import logo from '../../images/logo.jpg';
import SideBar from '../sidebar/SideBar';
import './menu.scss';
import SelectUnstyled, {
    SelectUnstyledProps,
    selectUnstyledClasses,
} from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled } from '@mui/system';
import { useAppDispatch } from '../../../app/hooks';
import { getAllRecipes, getSearchRecipes, updateRecipes } from '../../../app/reducers/recipesReducer';

const blue = {
    100: '#DAECFF',
    200: '#99CCF3',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
};

const grey = {
    100: '#E7EBF0',
    200: '#E0E3E7',
    300: '#CDD2D7',
    400: '#B2BAC2',
    500: '#A0AAB4',
    600: '#6F7E8C',
    700: '#3E5060',
    800: '#2D3843',
    900: '#1A2027',
};

const StyledButton = styled('button')(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.865rem;
    box-sizing: border-box;
    height: 4.8vh;
    min-width: 80px;
    padding-left:8px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
    border-radius: 15px;
    text-align: left;
    line-height: 1.5;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: #e6d0de;
  
    &:hover {
      background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
      border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
  
    &.${selectUnstyledClasses.focusVisible} {
      outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
    }
  
    &.${selectUnstyledClasses.expanded} {
      &::after {
        content: '▴';
      }
    }
  
    &::after {
      content: '▾';
      float: right;
    }
    `,
);

const StyledListbox = styled('ul')(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 5px;
    margin: 10px 0;
    min-width: 200px;
    height: 100px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
    border-radius: 0.75em;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    overflow: auto;
    outline: 0px;
    `,
);

const StyledOption = styled(OptionUnstyled)(
    ({ theme }) => `
    list-style: none;
    padding: 8px;
    border-radius: 0.45em;
    cursor: default;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &.${optionUnstyledClasses.selected} {
      background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
      color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
    }
  
    &.${optionUnstyledClasses.highlighted} {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
  
    &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
      background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
      color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
    }
  
    &.${optionUnstyledClasses.disabled} {
      color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
  
    &:hover:not(.${optionUnstyledClasses.disabled}) {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
    `,
);

const StyledPopper = styled(PopperUnstyled)`
    z-index: 1;
  `;

const CustomSelect = React.forwardRef(function CustomSelect<TValue>(
    props: SelectUnstyledProps<TValue>,
    ref: React.ForwardedRef<HTMLUListElement>,
) {
    const components: SelectUnstyledProps<TValue>['components'] = {
        Root: StyledButton,
        Listbox: StyledListbox,
        Popper: StyledPopper,
        ...props.components,
    };
    return <SelectUnstyled {...props} ref={ref} components={components} />;
}) as <TValue>(
        props: SelectUnstyledProps<TValue> & React.RefAttributes<HTMLUListElement>,
    ) => JSX.Element;

function Bagemenu(props: any) {

    const { userName } = props;
    const [anchorEl, setAnchorEl] = useState(null);
    const [select, setSelect] = useState('name');
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const open = Boolean(anchorEl);
    const dispatch = useAppDispatch();

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClose1 = () => {
        setAnchorEl(null);
    };

    function handleSearch(){
        if(search){
            //console.log(search)
            dispatch(getSearchRecipes({select : select, searchText : search}));
            navigate(`/${userName}/${select}/${search}`);
        }
        else alert('you should write what are you looking for');
    }

    function handleSelect(ev:any){
        setSelect(ev);
    }

    return (
        <div className="menu" id="outer-container">
            <div className="left">
                <div className='sideBar'>
                    <SideBar userName={userName} />
                </div>

                <div className='logo'>
                    <img src={logo} alt="" onClick={() => {dispatch(getAllRecipes()); navigate(`/${userName}/MainScreen`)}}/>
                </div>
                <div className="searchbox">
                    <div className='container'>
                        <input type="text" placeholder="search for a recipe" onChange={(ev:any) => setSearch(ev.target.value)}/>
                        <CustomSelect className='select' defaultValue={'name'} onChange={handleSelect}>
                            <StyledOption value={'name'}>name</StyledOption>
                            <StyledOption value={'time'}>time</StyledOption>
                            <StyledOption value={'calories'}>calories</StyledOption>
                            <StyledOption value={'servings'}>servings</StyledOption>
                            <StyledOption value={'ingredients'}>ingredients</StyledOption>
                        </CustomSelect>
                        <SearchIcon sx={{ fontSize: 30, color: '#b5739d' }} onClick={handleSearch}/>
                    </div>
                </div>

            </div>
            <div className="right">
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <PersonIcon sx={{ fontSize: 40, color: '#b5739d' }} />
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose1}>
                        <Link to={`/${userName}`}> Profile</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/"> Logout</Link>
                    </MenuItem>
                </Menu>
            </div>
        </div>
    );
}

export default Bagemenu;