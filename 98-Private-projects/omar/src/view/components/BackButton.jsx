// import './Buttons.scss';
import Button from '@mui/material/Button';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';


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