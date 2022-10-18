import {
  Avatar,
  Box,
  Fab,
  Modal,
  styled,
  TextField,
  Tooltip,
  Typography,
  Stack,
  ButtonGroup,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

import {
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",

  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyledModal
        open={open}
        onClose={(e) => setOpen(true)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          padding={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              sx={{ height: 30, width: 30 }}
              alt=""
              src="https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-6/299123140_3329781477344357_7420682527954690493_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHJL5Qs1X2p1ZE5vb6pGx_hJ4ZLrZxQKWQnhkutnFApZMfHlU1yejcnFIuQk-B71xruQXCs3j4iYy4cmqdfRUtI&_nc_ohc=gw7TR4zcIA8AX-2T5ib&tn=Hyu_-xKa5araHNi-&_nc_ht=scontent.fdac22-1.fna&oh=00_AT8QCynXNLuZroBnFIaRkRJUrwL14c-9A4jmrzTgle_mGA&oe=635013F3"
            />

            <Typography variant="h6" color="gray" textAlign="center">
              M.A Aziz
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={4}
            placeholder="What's on your mind "
            variant="standard"
          />
          <Stack direction="row" mt={2} mb={3} spacing={2}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>

          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
