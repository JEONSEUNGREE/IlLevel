import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useRecoilValue } from "recoil";
import { mainSearchList } from "../state/main/MainState";

export default function SearchSection() {
    const mainSearch = useRecoilValue(mainSearchList);

    const options = mainSearch.map((option) => {
        const firstLetter = option.title[0].toUpperCase();
        return {
            firstLetter: firstLetter,
            ...option,
        };
    });

    return (
        <div className="main-search-area">
            <Autocomplete
                id="grouped-demo"
                options={options.sort(
                    (a, b) => -b.firstLetter.localeCompare(a.firstLetter),
                )}
                groupBy={(option) => option.firstLetter}
                getOptionLabel={(option) => option.title}
                sx={{ width: 600 }}
                renderInput={(params) => (
                    <TextField {...params} label="With categories" />
                )}
            />
        </div>
    );
}
