import {useState} from "react";
import {
    Box, IconButton, InputBase, Typography, Select, MenuItem, FormControl, useTheme, useMediaQuery
} from "@mui/material";
import {
    Search, Message, DarkMode, LightMode, Notifications, Help, Menu, Close
} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {setMode, setLogout} from "../../state/state";
import {useNavigate} from "react-router-dom";
import FlexBetween from "../../componets/FlexBetween";

const Navbar = () => {

    const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

    const theme = useTheme();
    const neutralLight = theme.palette.neutral.light;
    const dark = theme.palette.neutral

    return (<div>Navbar</div>)
}
export default Navbar