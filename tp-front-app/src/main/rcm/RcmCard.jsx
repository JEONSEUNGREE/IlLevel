import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import PropTypes from "prop-types";

const RcmLocalCard = ({ props }) => {
    // https://images.mypetlife.co.kr/content/uploads/2021/10/19151330/corgi-g1a1774f95_1280-1024x682.jpg
    const { maxWidth, imageUrl, height, title, contents } = props;

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
    imageUrl: PropTypes.string,
    height: PropTypes.number,
    title: PropTypes.string,
    contents: PropTypes.string,
};

export default RcmLocalCard;
