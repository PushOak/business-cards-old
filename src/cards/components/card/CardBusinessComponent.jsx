import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";
import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import { useUser } from "../../../users/providers/UserProvider";

export default function CardBusinessComponent({
  card,
  handleDelete,
  handleEdit,
  handleLikeCard,
}) {
  const navigate = useNavigate();
  const { user } = useUser()

  return (
    <>
      <Card sx={{ width: 250, m: 2 }}>
        <CardActionArea
          onClick={() => navigate(`${ROUTES.CARD_INFO}/${card._id}`)}
        >
          <CardHead image={card.image} />
          <CardBody
            title={card.title}
            subtitle={card.subtitle}
            phone={card.phone}
            address={card.address}
            cardNumber={card.bizNumber}
          />
        </CardActionArea>

        <CardActionBar
          id={card._id}
          user_id={card.user_id}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleLikeCard={handleLikeCard}
          isLiked={card.likes?.includes(user.id)}
        />
      </Card>
    </>
  );
}
