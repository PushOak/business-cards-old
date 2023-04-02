import { Box, CardActions, IconButton } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { func, string } from "prop-types";
import { useUser } from "../../../users/providers/UserProvider";
import CardDeleteDialog from "./CardDeleteDialog";

export default function CardActionBar({
  handleDelete,
  handleEdit,
  handleLike,
  id,
  user_id,
}) {

  const { user } = useUser();
  const [isDialogOpen, setDialog] = useState(false);

  return (
    <>
      <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
        {user?.isAdmin || user?.id == user_id ? (<Box>
          <IconButton aria-label="Delete Card" onClick={() => setDialog(true)}>
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="Edit Card" onClick={() => handleEdit(id)}>
            <ModeEditIcon />
          </IconButton>
        </Box>) : null}

        <Box>
          <IconButton aria-label="Call">
            <CallIcon />
          </IconButton>
          {user && (<IconButton aria-label="Add to favorite" onClick={() => handleLike(id)}>
            <FavoriteIcon />
          </IconButton>)}
        </Box>
      </CardActions>
      <CardDeleteDialog
        isDialogOpen={isDialogOpen}
        onChangeDialog={() => setDialog(false)}
        onDelete={handleDelete}
      />
    </>
  );
}

CardActionBar.propTypes = {
  handleDelete: func.isRequired,
  handleEdit: func.isRequired,
  handleLike: func.isRequired,
  id: string.isRequired,
}