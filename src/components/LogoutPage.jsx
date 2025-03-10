import { Typography, Button, Box, Card, CardContent } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg"; // Ensure the path is correct

function LogoutPage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        position: "absolute",
        top: 0,
        left: 0,
        padding: 3,
      }}
    >


      <Card
        sx={{
          p: 3,
          boxShadow: 5,
          borderRadius: 3,
          background: "linear-gradient(to right, #1E3C72, #2A5298)",
          color: "white",
          maxWidth: "500px",
        }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            Log Out
          </Typography>
          <Typography variant="body1" color="white" paragraph>
            Are you sure you want to log out?
          </Typography>

          <Box sx={{ mt: 3, display: "flex", justifyContent: "center", gap: 2 }}>
            {/* Cancel Button (Go Back) */}
            <Button
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              sx={{
                borderColor: "white",
                color: "white",
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
              }}
              onClick={() => navigate(-1)}
            >
              Cancel
            </Button>

            {/* Log Out Button */}
            <Button
              variant="contained"
              startIcon={<ExitToAppIcon />}
              sx={{
                backgroundColor: "#FF1744",
                "&:hover": { backgroundColor: "#D50000" },
                color: "white",
              }}
              onClick={() => {
                alert("Logged Out Successfully!");
                navigate("/login"); // Redirect to login page after logout
              }}
            >
              Log Out
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default LogoutPage;