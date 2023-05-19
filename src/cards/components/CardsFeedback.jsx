import React from "react";
import { Typography } from "@mui/material";
import Error from "../../components/Error";
import Spinner from "../../components/Spinner";
import Cards from "./Cards";

export default function CardsFeedback({
  isLoading,
  cards,
  error,
  handleDelete,
  handleLikeCard,
}) {
  if (isLoading) return <Spinner />
  if (error) return <Error errorMessage={error.toString()} />
  if (cards && cards.length === 0) {
    return (
      <Typography>
        Whoops... it seems that there are no business cards to display.
      </Typography>
    );
  }
  if (cards)
    return (
      <Cards
        cards={cards}
        handleDelete={handleDelete}
        handleLikeCard={handleLikeCard}
      />
    );
  return null;
};
