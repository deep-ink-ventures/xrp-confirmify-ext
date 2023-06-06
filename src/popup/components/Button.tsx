import { ButtonProps, styled } from "@mui/material";
import Button from "@mui/material/Button";

const StandardButton = styled(Button)<ButtonProps>(() => ({
  color: "#FFFFFF",
  backgroundColor: "#000000",
  borderRadius: "5px",
  padding: "16px 24px",
  gap: "8px",
  width: "100%",
  '&:hover': {
    backgroundColor: "#000000",
  },
}));

const ActiveButton = styled(Button)<ButtonProps>(() => ({
  color: "#000000",
  backgroundColor: "#F5F5F5",
  borderRadius: "5px",
  padding: "16px 24px",
  gap: "8px",
  width: "100%",
  '&:hover': {
    backgroundColor: "#F5F5F5",
  },
}));

export {
  StandardButton, ActiveButton
}