import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Box } from '@mui/material';

const Input = styled("input")({
  display: "none"
});

function Post() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <div id="Upload-form">
            <div>
                <Stack alignItems="center" spacing={2}>
                <label htmlFor="contained-button-file" id="upload">
                    <Input
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                    />
                    <Button variant="contained" component="span">
                    写真を選ぶ
                    </Button>
                </label>
                </Stack>
            </div>
            <div id="taitoru">
                <TextField id="title" label="これはなんですか" variant="outlined" />
            </div>
            <div id="setumei">
                <TextField id="explanation" label="説明" multiline rows={5} />
            </div>
            <FormControl sx={{ minWidth: 300 }} id="basho">
                <InputLabel htmlFor="grouped-basho-select">都道府県</InputLabel>
                <Select
                native
                defaultValue=""
                id="grouped-basho-select"
                label="Grouping"
                >
                <optgroup>
                    <option aria-label="None" value="" />
                    <option value={1}>北海道</option>
                    <option value={2}>青森県</option>
                    <option value={3}>岩手県</option>
                    <option value={4}>宮城県</option>
                    <option value={5}>秋田県</option>
                    <option value={6}>山形県</option>
                    <option value={7}>福島県</option>
                    <option value={8}>茨城県</option>
                    <option value={9}>栃木県</option>
                    <option value={10}>群馬県</option>
                    <option value={11}>埼玉県</option>
                    <option value={12}>千葉県</option>
                    <option value={13}>東京都</option>
                    <option value={14}>神奈川県</option>
                    <option value={15}>新潟県</option>
                    <option value={16}>富山県</option>
                    <option value={17}>石川県</option>
                    <option value={18}>福井県</option>
                    <option value={19}>山梨県</option>
                    <option value={20}>長野県</option>
                    <option value={21}>岐阜県</option>
                    <option value={22}>静岡県</option>
                    <option value={23}>愛知県</option>
                    <option value={24}>三重県</option>
                    <option value={25}>滋賀県</option>
                    <option value={26}>京都府</option>
                    <option value={27}>大阪府</option>
                    <option value={28}>兵庫県</option>
                    <option value={29}>奈良県</option>
                    <option value={30}>和歌山県</option>
                    <option value={31}>鳥取県</option>
                    <option value={32}>島根県</option>
                    <option value={33}>岡山県</option>
                    <option value={34}>広島県</option>
                    <option value={35}>山口県</option>
                    <option value={36}>徳島県</option>
                    <option value={37}>香川県</option>
                    <option value={38}>愛媛県</option>
                    <option value={39}>高知県</option>
                    <option value={40}>福岡県</option>
                    <option value={41}>佐賀県</option>
                    <option value={42}>長崎県</option>
                    <option value={43}>熊本県</option>
                    <option value={44}>大分県</option>
                    <option value={45}>宮崎県</option>
                    <option value={46}>鹿児島県</option>
                    <option value={47}>沖縄県</option>
                </optgroup>
                </Select>
            </FormControl>
            <div>
                <FormControl sx={{ minWidth: 300 }} id="kisetsu">
                <InputLabel htmlFor="grouped-kisetsu-select">季節</InputLabel>
                <Select
                    native
                    defaultValue=""
                    id="grouped-kisetsu-select"
                    label="Grouping"
                >
                    <optgroup>
                    <option aria-label="None" value="" />
                    <option value={48}>春</option>
                    <option value={49}>夏</option>
                    <option value={50}>秋</option>
                    <option value={51}>冬</option>
                    </optgroup>
                </Select>
                </FormControl>
            </div>
            <div>
                <FormControl sx={{ minWidth: 300 }} id="jikantai">
                <InputLabel htmlFor="grouped-jikantai-select">時間帯</InputLabel>
                <Select
                    native
                    defaultValue=""
                    id="grouped-jikantai-select"
                    label="Grouping"
                >
                    <optgroup>
                    <option aria-label="None" value="" />
                    <option value={52}>朝</option>
                    <option value={53}>昼</option>
                    <option value={54}>夕</option>
                    <option value={55}>夜</option>
                    </optgroup>
                </Select>
                </FormControl>
            </div>
            <div>
                <FormControl sx={{ minWidth: 300 }} id="tenki">
                <InputLabel htmlFor="grouped-tenki-select">天気</InputLabel>
                <Select
                    native
                    defaultValue=""
                    id="grouped-tenki-select"
                    label="Grouping"
                >
                    <optgroup>
                    <option aria-label="None" value="" />
                    <option value={56}>晴れ</option>
                    <option value={57}>曇り</option>
                    <option value={58}>雨</option>
                    <option value={59}>雷</option>
                    </optgroup>
                </Select>
                </FormControl>
            </div>
        </div>
    </Box>
  );
}

export default Post;

/*import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const Input = styled('input')({
    display: 'none',
  });

function Post() {
    return (
        <>
            <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" multiple type="file" />
                <Button variant="contained" component="span">
                    Upload
                </Button>
            </label>
        </>
    )
}

export default Post;*/