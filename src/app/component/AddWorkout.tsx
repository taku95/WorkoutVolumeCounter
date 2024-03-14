import { Container, Button, Box, Typography, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { useState } from "react";

const AddWorkout: React.FC = () => {
  const [weight, setWeight] = useState<number>(60);
  const [reps, setReps] = useState<number>(0);
  const [totalWeight, setTotalWeight] = useState<number>(0);

  const calculateTotalWeight = (newWeight: number, newReps: number) => {
    const newTotalWeight: number = newWeight * newReps;
    setTotalWeight(newTotalWeight ? newTotalWeight : 0);
  };

  const calculateRM = (weight: number, reps: number): number => {
    // RM（リペティション・マックス）の計算式
    const rm = weight * (1 + reps / 40);
    // 計算結果を小数点第2位まで丸める
    if (reps === 0) {
      return 0;
    } else if (reps === 1) {
      return weight;
    } else {
      return Math.round(rm * 100) / 100;
    }
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
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Typography
            variant="body1"
            sx={{
              color: "#FFFFFF",
              border: "1px solid",
              borderRadius: "4px",
              padding: "8px",
              borderColor: "#1976d2",
              width: "100%",
              marginRight: 1,
              height: "40px",
            }}
          >
            RM Converted: {calculateRM(weight, reps)} kg
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="body1"
            sx={{
              color: "#FFFFFF",
              border: "1px solid",
              borderRadius: "4px",
              padding: "8px",
              borderColor: "#1976d2",
              width: "100%",
              marginRight: 1,
              height: "40px",
            }}
          >
            Total: {totalWeight} kg
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography
            variant="body1"
            sx={{
              color: "#FFFFFF",
              border: "1px solid",
              borderRadius: "4px",
              padding: "8px",
              borderColor: "#1976d2",
              width: "100%",
              marginRight: 1,
              height: "40px",
            }}
          >
            {weight} kg
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Button
            color="primary"
            variant="outlined"
            aria-label="add"
            onClick={incrementWeight}
            sx={{ height: "40px", width: "100%" }}
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
            sx={{ height: "40px", width: "100%" }}
          >
            <RemoveIcon />
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Typography
            variant="body1"
            sx={{
              color: "#FFFFFF",
              border: "1px solid",
              borderRadius: "4px",
              padding: "8px",
              borderColor: "#1976d2",
              width: "100%",
              marginRight: 1,
              height: "40px",
            }}
          >
            {reps} reps
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Button
            color="primary"
            variant="outlined"
            aria-label="add"
            onClick={incrementReps}
            sx={{ height: "40px", width: "100%" }}
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
            sx={{ height: "40px", width: "100%" }}
          >
            <RemoveIcon />
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddWorkout;
