import {
  Container,
  Button,
  Grid,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { useState } from "react";

const AddWorkout: React.FC = () => {
  const [weight, setWeight] = useState<number>(0);
  const [reps, setReps] = useState<number>(0);
  const [totalWeight, setTotalWeight] = useState<number>(0);

  const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newWeight: number = parseFloat(event.target.value);
    setWeight(newWeight);
    calculateTotalWeight(newWeight, reps);
  };

  const handleRepsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newReps: number = parseInt(event.target.value);
    setReps(newReps);
    calculateTotalWeight(weight, newReps);
  };

  const calculateTotalWeight = (newWeight: number, newReps: number) => {
    const newTotalWeight: number = newWeight * newReps;
    setTotalWeight(newTotalWeight ? newTotalWeight : 0);
  };

  const incrementWeight = () => {
    setWeight((prevWeight) => prevWeight + 2.5); // 2.5刻みで増加
    calculateTotalWeight(weight + 2.5, reps);
  };

  const decrementWeight = () => {
    if (weight >= 2.5) {
      setWeight((prevWeight) => prevWeight - 2.5); // 2.5刻みで減少
      calculateTotalWeight(weight - 2.5, reps);
    }
  };

  const incrementReps = () => {
    setReps((prevReps) => prevReps + 1); // 1刻みで増加
    calculateTotalWeight(weight, reps + 1);
  };

  const decrementReps = () => {
    if (reps > 1) {
      setReps((prevReps) => prevReps - 1); // 1刻みで減少
      calculateTotalWeight(weight, reps - 1);
    }
  };

  return (
    <Container sx={{ maxWidth: "430px", padding: "10px" }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={6}>
          <OutlinedInput
            type="number"
            value={weight}
            onChange={handleWeightChange}
            endAdornment={
              <InputAdornment position="end" sx={{ color: "#FFFFFF" }}>
                kg
              </InputAdornment>
            }
            inputProps={{ step: 2.5 }}
            sx={{ width: "100%", color: "#FFFFFF" }}
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            color="primary"
            variant="outlined"
            aria-label="add"
            onClick={incrementWeight}
            sx={{ width: "100%" }}
          >
            <AddIcon />
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            color="primary"
            variant="outlined"
            aria-label="remove"
            onClick={decrementWeight}
            sx={{ width: "100%" }}
          >
            <RemoveIcon />
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={6}>
          <OutlinedInput
            type="number"
            value={reps}
            onChange={handleRepsChange}
            endAdornment={
              <InputAdornment position="end" sx={{ color: "#FFFFFF" }}>
                reps
              </InputAdornment>
            }
            sx={{ width: "100%", color: "#FFFFFF" }}
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            color="primary"
            variant="outlined"
            aria-label="add"
            onClick={incrementReps}
            sx={{ width: "100%" }}
          >
            <AddIcon />
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            color="primary"
            variant="outlined"
            aria-label="remove"
            onClick={decrementReps}
            sx={{ width: "100%" }}
          >
            <RemoveIcon />
          </Button>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "flex-end", marginTop: "10px" }}
      >
        <Typography variant="body1" sx={{ color: "#FFFFFF" }}>
          Total: {totalWeight} kg
        </Typography>
      </Grid>
    </Container>
  );
};

export default AddWorkout;
