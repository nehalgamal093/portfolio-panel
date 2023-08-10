import { Button, Typography } from '@mui/material'

export const ActionButton = ({ title, onClick, color }) => {
    return (
        <Button
            variant="contained"
            disableElevation
            sx={{ backgroundColor: `${color}`, fontSize: "12px", margin: "5px", }}
            onClick={onClick}
        >
            <Typography
                sx={{
                    fontSize: "13px",
                    fontWeight: "Bold",
                    textTransform: "capitalize",
                }}
            >
                {title}
            </Typography>
        </Button>
    )
}