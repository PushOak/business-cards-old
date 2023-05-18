import { Grid, Typography } from "@mui/material";
import React from "react";
import CardBusinessComponent from "./card/CardBusinessComponent";

export default function Cards({ cards, handleDelete, handleLikeCard }) {
  const handleEdit = (id) => {
    console.log(`Card ${id} is being edited`);
  };

  const handleLike = (id) => {
    console.log(`Card ${id} liked`);
  }

  return (
    <>
      <Grid container spacing={2}>
        {cards.map((card, index) => (
          <Grid item xc={12} s={6} md={4} lg={3} key={index}>
            <CardBusinessComponent
              card={card}
              key={card._id}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleLikeCard={handleLikeCard}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
