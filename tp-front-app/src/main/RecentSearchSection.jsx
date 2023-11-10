import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import FaceIcon from "@mui/icons-material/Face";

export default function RecentSearchSection() {
    return (
        <div className="main-recent-search-area">
            <p>Recent Viewed</p>
            <Stack direction="row" spacing={1}>
                <Chip icon={<FaceIcon />} label="CSS하기 딱 싫은날 후후" />
                <Chip
                    icon={<FaceIcon />}
                    label="여행가고싶다"
                    variant="outlined"
                />
                <Chip
                    icon={<FaceIcon />}
                    label="최근본 지역"
                    variant="outlined"
                />
                <Chip
                    icon={<FaceIcon />}
                    label="최근본 호텔"
                    variant="outlined"
                />
            </Stack>
        </div>
    );
}
