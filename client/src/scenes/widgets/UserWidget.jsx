import {
    ManageAccountsOutlined,
    EditOutlined,
    LocationOnOutlined,
} from "@mui/icons-material";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Typography, Divider, useTheme, Avatar } from "@mui/material";
import FlexBetween from "componets/FlexBetween";
import WidgetWrapper from "componets/WidgetWrapper";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



const UserWidget = ({ userId, picturePath }) => {
    const [user, setUser] = useState(null);
    const { palette } = useTheme();
    const navigate = useNavigate();
    const token = useSelector((state) => state.token);
    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;

    const getUser = async () => {
        const response = await fetch(`http://localhost:3001/users/${userId}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        setUser(data);
    };

    useEffect(() => {
        getUser();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    if (!user) {
        return null;
    }

    const {
        firstName,
        lastName,
        location,
        nickname,
        viewedProfile,
        impressions,
        friends,
    } = user;

    return (
        <WidgetWrapper>
            {/* FIRST ROW */}
            <FlexBetween
                gap="0.5rem"
                pb="1.1rem"
                onClick={() => navigate(`/profile/${userId}`)}
            >
                <FlexBetween gap="1rem">
                    <Avatar
                        alt="Remy Sharp"
                        sx={{ fontSize: "22px", bgcolor: dark }}

                    >
                        {nickname.slice(0, 1).toUpperCase()}
                    </Avatar>
                    <Box>
                        <Typography
                            variant="h4"
                            color={dark}
                            fontWeight="500"
                            sx={{
                                "&:hover": {
                                    color: palette.primary.light,
                                    cursor: "pointer",
                                },
                            }}
                        >
                            {firstName} {lastName}
                        </Typography>
                        <Typography color={medium}>{nickname}</Typography>
                        <Typography color={medium}>{friends.length} friends</Typography>
                    </Box>

                </FlexBetween>
                <ManageAccountsOutlined />
            </FlexBetween>

            <Divider />

            {/* SECOND ROW */}
            <Box p="1rem 0">
                <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
                    <LocationOnOutlined fontSize="large" sx={{ color: main }} />
                    <Typography color={medium}>{location}</Typography>
                </Box>
            </Box>

            <Divider />

            {/* THIRD ROW */}
            <Box p="1rem 0">
                <FlexBetween mb="0.5rem">
                    <Typography color={medium}>Who's viewed your profile</Typography>
                    <Typography color={main} fontWeight="500">
                        {viewedProfile}
                    </Typography>
                </FlexBetween>
                <FlexBetween>
                    <Typography color={medium}>Impressions of your post</Typography>
                    <Typography color={main} fontWeight="500">
                        {impressions}
                    </Typography>
                </FlexBetween>
            </Box>

            <Divider />

            {/* FOURTH ROW */}
            <Box p="1rem 0">
                <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
                    Social Profiles
                </Typography>

                <FlexBetween gap="1rem">
                    <FlexBetween gap="1rem">
                        <InstagramIcon fontSize="large" />
                        <Box>
                            <Typography color={main} fontWeight="500">
                                Instagram
                            </Typography>
                            <Typography color={medium}>Social Network</Typography>
                        </Box>
                    </FlexBetween>
                    <EditOutlined sx={{ color: main }} />
                </FlexBetween>

                <FlexBetween gap="1rem" mb="0.5rem">
                    <FlexBetween gap="1rem">
                        <TwitterIcon fontSize="large" />
                        <Box>
                            <Typography color={main} fontWeight="500">
                                Twitter
                            </Typography>
                            <Typography color={medium}>Social Network</Typography>
                        </Box>
                    </FlexBetween>
                    <EditOutlined sx={{ color: main }} />
                </FlexBetween>
            </Box>
        </WidgetWrapper>
    );
};

export default UserWidget;