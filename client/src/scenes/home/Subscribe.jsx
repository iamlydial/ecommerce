import React, { useState } from "react";
import { Box, InputBase, Divider, Typography, IconButton } from "@mui/material";
import MarkEmailRadOutlined from "@mui/icons-material/MarkEmailReadOutlined";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  return (
    <Box width="80%" margin="80px auto" textAlign="center">
      <IconButton>
        <MarkEmailRadOutlined fontSize="large"></MarkEmailRadOutlined>
        <Typography variant="h3">Subscribe to Our Newsletter</Typography>
        <Typography>
          and receive $20 coupon for your first order when you checkout
        </Typography>
        <Box
          p="2px 4px"
          m="15px auto"
          display="flex"
          alignItems="center"
          width="75%"
          backgroundColor="#f2f2f2"
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Enter Email"
            onClick={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <Typography sx={{ p: "10", ":hover": { cursor: "pointer" } }}>
            Subscribe
          </Typography>
        </Box>
      </IconButton>
    </Box>
  );
};

export default Subscribe;
