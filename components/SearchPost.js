
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { useState, forwardRef } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch"
        }
      }
    }
  }));

function SearchPost() {
  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <Divider />
      <Box sx={{ minWidth: 120 }}>
        <FormControl sx={{ m: 1, minWidth: 300 }} id="basho">
          <InputLabel htmlFor="grouped-basho-select">都道府県</InputLabel>
          <Select
            defaultValue=""
            id="grouped-basho-select"
            label="Grouping"
          >
            <MenuItem value="">
              <em>なし</em>
            </MenuItem>
            <MenuItem value={1}>北海道</MenuItem>
            <MenuItem value={2}>青森県</MenuItem>
            <MenuItem value={3}>岩手県</MenuItem>
            <MenuItem value={4}>宮城県</MenuItem>
            <MenuItem value={5}>秋田県</MenuItem>
            <MenuItem value={6}>山形県</MenuItem>
            <MenuItem value={7}>福島県</MenuItem>
            <MenuItem value={8}>茨城県</MenuItem>
            <MenuItem value={9}>栃木県</MenuItem>
            <MenuItem value={10}>群馬県</MenuItem>
            <MenuItem value={11}>埼玉県</MenuItem>
            <MenuItem value={12}>千葉県</MenuItem>
            <MenuItem value={13}>東京都</MenuItem>
            <MenuItem value={14}>神奈川県</MenuItem>
            <MenuItem value={15}>新潟県</MenuItem>
            <MenuItem value={16}>富山県</MenuItem>
            <MenuItem value={17}>石川県</MenuItem>
            <MenuItem value={18}>福井県</MenuItem>
            <MenuItem value={19}>山梨県</MenuItem>
            <MenuItem value={20}>長野県</MenuItem>
            <MenuItem value={21}>岐阜県</MenuItem>
            <MenuItem value={22}>静岡県</MenuItem>
            <MenuItem value={23}>愛知県</MenuItem>
            <MenuItem value={24}>三重県</MenuItem>
            <MenuItem value={25}>滋賀県</MenuItem>
            <MenuItem value={26}>京都府</MenuItem>
            <MenuItem value={27}>大阪府</MenuItem>
            <MenuItem value={28}>兵庫県</MenuItem>
            <MenuItem value={29}>奈良県</MenuItem>
            <MenuItem value={30}>和歌山県</MenuItem>
            <MenuItem value={31}>鳥取県</MenuItem>
            <MenuItem value={32}>島根県</MenuItem>
            <MenuItem value={33}>岡山県</MenuItem>
            <MenuItem value={34}>広島県</MenuItem>
            <MenuItem value={35}>山口県</MenuItem>
            <MenuItem value={36}>徳島県</MenuItem>
            <MenuItem value={37}>香川県</MenuItem>
            <MenuItem value={38}>愛媛県</MenuItem>
            <MenuItem value={39}>高知県</MenuItem>
            <MenuItem value={40}>福岡県</MenuItem>
            <MenuItem value={41}>佐賀県</MenuItem>
            <MenuItem value={42}>長崎県</MenuItem>
            <MenuItem value={43}>熊本県</MenuItem>
            <MenuItem value={44}>大分県</MenuItem>
            <MenuItem value={45}>宮崎県</MenuItem>
            <MenuItem value={46}>鹿児島県</MenuItem>
            <MenuItem value={47}>沖縄県</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 300 }} id="kisetsu">
          <InputLabel htmlFor="grouped-kisetsu-select">季節</InputLabel>
          <Select
            defaultValue=""
            id="grouped-kisetsu-select"
            label="Grouping"
          >
            <MenuItem value="">
                <em>なし</em>
            </MenuItem>
            <MenuItem value={"spring"}>春</MenuItem>
            <MenuItem value={"summer"}>夏</MenuItem>
            <MenuItem value={"autumn"}>秋</MenuItem>
            <MenuItem value={"winter"}>冬</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 300 }} id="jikantai">
          <InputLabel htmlFor="grouped-jikantai-select">
            時間帯
          </InputLabel>
          <Select
            defaultValue=""
            id="grouped-jikantai-select"
            label="Grouping"
          >
            <MenuItem value="">
              <em>なし</em>
            </MenuItem>
            <MenuItem value={"morning"}>朝</MenuItem>
            <MenuItem value={"daytime"}>昼</MenuItem>
            <MenuItem value={"evening"}>夕</MenuItem>
            <MenuItem value={"night"}>夜</MenuItem>
          </Select>
        </FormControl>
          <FormControl sx={{ m: 1, minWidth: 300 }} id="tenki">
          <InputLabel htmlFor="grouped-tenki-select">天気</InputLabel>
          <Select
            defaultValue=""
            id="grouped-tenki-select"
            label="Grouping"
          >
            <MenuItem value="">
              <em>なし</em>
            </MenuItem>
            <MenuItem value={"sunny"}>晴れ</MenuItem>
            <MenuItem value={"cloudy"}>曇り</MenuItem>
            <MenuItem value={"rainy"}>雨</MenuItem>
            <MenuItem value={"thunderstorm"}>雷</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button variant="contained" id="soushin">
        検索
      </Button>
    </>
  );
}

export default SearchPost;