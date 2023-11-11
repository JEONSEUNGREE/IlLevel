import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import PropTypes from "prop-types";

const RcmLocalCard = ({ props }) => {
    const { maxWidth, height, imageUrl, title, contents } = props;

    return (
        <Card sx={{ maxWidth: maxWidth }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height={height}
                    image={imageUrl}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {contents}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
            </CardActions>
        </Card>
    );
};

RcmLocalCard.propTypes = {
    props: PropTypes.object,
    maxWidth: PropTypes.number,
    height: PropTypes.number,
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    contents: PropTypes.string,
};

export default RcmLocalCard;
