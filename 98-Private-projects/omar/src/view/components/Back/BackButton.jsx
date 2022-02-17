import './Buttons.scss';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
// import SendIcon from '@mui/icons-material/Back';
import Stack from '@mui/material/Stack';

function BackButton() {
    return (
      <div className="BackButton">
        <Button
          sx={{
            width: 150,
            fontSize: 20,
          }}
          size="large"
          variant="contained"
          startIcon={<ArrowCircleLeftIcon />}
        >
          {" "}
          back
        </Button>
      </div>
    );
  }

  export default BackButton;