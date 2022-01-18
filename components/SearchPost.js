import { useState } from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { useSpotDataState } from "../contexts/SpotDataStateProvider";
import { useNavigationBarState  } from "../contexts/NavigationBarStateProvider";

function SearchPost() {
  const [spotArea, setSpotArea] = useState("none");
  const [spotSeason, setSpotSeason] = useState("none");
  const [spotTime, setSpotTime] = useState("none");
  const [spotWeather, setSpotWeather] = useState("none");
  const { setFilterConditions } = useSpotDataState();
  const { setNaviBarState } = useNavigationBarState ();

  const spotAreaHandleChange = (event) => {
    setSpotArea(event.target.value);
  }

  const spotSeasonHandleChange = (event) => {
    setSpotSeason(event.target.value);
  }

  const spotTimeHandleChange = (event) => {
    setSpotTime(event.target.value);
  }

  const spotWeatherHandleChange = (event) => {
    setSpotWeather(event.target.value);
  }

  const handleClick = () => {
    setFilterConditions({spotArea, spotSeason, spotTime, spotWeather});
    setNaviBarState("Filter");
  }

  const SearchInput = () => {
    return (
    <>
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 5}}>
      <FormControl sx={{ m: 1, minWidth: 300 }} id="basho">
            <InputLabel htmlFor="grouped-basho-select">都道府県</InputLabel>
            <Select
              defaultValue=""
              value={spotArea}
              onChange={spotAreaHandleChange}
              id="grouped-basho-select"
              label="Grouping"
            >
              <MenuItem value="none">
                <em>なし</em>
              </MenuItem>
              <MenuItem value={"北海道"}>北海道</MenuItem>
              <MenuItem value={"青森県"}>青森県</MenuItem>
              <MenuItem value={"岩手県"}>岩手県</MenuItem>
              <MenuItem value={"宮城県"}>宮城県</MenuItem>
              <MenuItem value={"秋田県"}>秋田県</MenuItem>
              <MenuItem value={"山形県"}>山形県</MenuItem>
              <MenuItem value={"福島県"}>福島県</MenuItem>
              <MenuItem value={"茨城県"}>茨城県</MenuItem>
              <MenuItem value={"栃木県"}>栃木県</MenuItem>
              <MenuItem value={"群馬県"}>群馬県</MenuItem>
              <MenuItem value={"埼玉県"}>埼玉県</MenuItem>
              <MenuItem value={"千葉県"}>千葉県</MenuItem>
              <MenuItem value={"東京都"}>東京都</MenuItem>
              <MenuItem value={"神奈川県"}>神奈川県</MenuItem>
              <MenuItem value={"新潟県"}>新潟県</MenuItem>
              <MenuItem value={"富山県"}>富山県</MenuItem>
              <MenuItem value={"石川県"}>石川県</MenuItem>
              <MenuItem value={"福井県"}>福井県</MenuItem>
              <MenuItem value={"山梨県"}>山梨県</MenuItem>
              <MenuItem value={"長野県"}>長野県</MenuItem>
              <MenuItem value={"岐阜県"}>岐阜県</MenuItem>
              <MenuItem value={"静岡県"}>静岡県</MenuItem>
              <MenuItem value={"愛知県"}>愛知県</MenuItem>
              <MenuItem value={"三重県"}>三重県</MenuItem>
              <MenuItem value={"滋賀県"}>滋賀県</MenuItem>
              <MenuItem value={"京都府"}>京都府</MenuItem>
              <MenuItem value={"大阪府"}>大阪府</MenuItem>
              <MenuItem value={"兵庫県"}>兵庫県</MenuItem>
              <MenuItem value={"奈良県"}>奈良県</MenuItem>
              <MenuItem value={"和歌山県"}>和歌山県</MenuItem>
              <MenuItem value={"鳥取県"}>鳥取県</MenuItem>
              <MenuItem value={"島根県"}>島根県</MenuItem>
              <MenuItem value={"岡山県"}>岡山県</MenuItem>
              <MenuItem value={"広島県"}>広島県</MenuItem>
              <MenuItem value={"山口県"}>山口県</MenuItem>
              <MenuItem value={"徳島県"}>徳島県</MenuItem>
              <MenuItem value={"香川県"}>香川県</MenuItem>
              <MenuItem value={"愛媛県"}>愛媛県</MenuItem>
              <MenuItem value={"高知県"}>高知県</MenuItem>
              <MenuItem value={"福岡県"}>福岡県</MenuItem>
              <MenuItem value={"佐賀県"}>佐賀県</MenuItem>
              <MenuItem value={"長崎県"}>長崎県</MenuItem>
              <MenuItem value={"熊本県"}>熊本県</MenuItem>
              <MenuItem value={"大分県"}>大分県</MenuItem>
              <MenuItem value={"宮崎県"}>宮崎県</MenuItem>
              <MenuItem value={"鹿児島県"}>鹿児島県</MenuItem>
              <MenuItem value={"沖縄県"}>沖縄県</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 300 }} id="kisetsu">
            <InputLabel htmlFor="grouped-kisetsu-select">季節</InputLabel>
            <Select
              defaultValue=""
              value={spotSeason}
              onChange={spotSeasonHandleChange}
              id="grouped-kisetsu-select"
              label="Grouping"
            >
              <MenuItem value="none">
                  <em>なし</em>
              </MenuItem>
              <MenuItem value={"春"}>春</MenuItem>
              <MenuItem value={"夏"}>夏</MenuItem>
              <MenuItem value={"秋"}>秋</MenuItem>
              <MenuItem value={"冬"}>冬</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 300 }} id="jikantai">
            <InputLabel htmlFor="grouped-jikantai-select">
              時間帯
            </InputLabel>
            <Select
              defaultValue=""
              value={spotTime}
              onChange={spotTimeHandleChange}
              id="grouped-jikantai-select"
              label="Grouping"
            >
              <MenuItem value="none">
                <em>なし</em>
              </MenuItem>
              <MenuItem value={"朝"}>朝</MenuItem>
              <MenuItem value={"昼"}>昼</MenuItem>
              <MenuItem value={"夕"}>夕</MenuItem>
              <MenuItem value={"夜"}>夜</MenuItem>
            </Select>
          </FormControl>
            <FormControl sx={{ m: 1, minWidth: 300 }} id="tenki">
            <InputLabel htmlFor="grouped-tenki-select">天気</InputLabel>
            <Select
              defaultValue=""
              value={spotWeather}
              onChange={spotWeatherHandleChange}
              id="grouped-tenki-select"
              label="Grouping"
            >
              <MenuItem value="none">
                <em>なし</em>
              </MenuItem>
              <MenuItem value={"晴れ"}>晴れ</MenuItem>
              <MenuItem value={"曇り"}>曇り</MenuItem>
              <MenuItem value={"雨"}>雨</MenuItem>
              <MenuItem value={"雷"}>雷</MenuItem>
            </Select>
          </FormControl>
      <Button onClick={handleClick} variant="contained" id="soushin">
        検索
      </Button>
    </Box>
    </>
  );
  }

  return (
    <SearchInput />
  );
}

export default SearchPost;