
import PersonIcon from '@mui/icons-material/Person';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EventNoteIcon from '@mui/icons-material/EventNote';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TypographyText from "../../../../components/Typograph"
import { TagContent, TitleContentStyled } from './TitleContent.styled';


export const TitleContent = () => {

    return (
        <TitleContentStyled>
            <TypographyText font="24" color="white" bold="true">
                В сети появились характеристики и фотографии планшетов серии Samsung Galaxy Tab S8
            </TypographyText>
            <TagContent>
                <TypographyText font="14" color="white">
                    <PersonIcon />
                    Cemil Huseynzade
                </TypographyText>
                <TypographyText font="14" color="white">
                    <LocalOfferIcon />
                    Elm Texnologiya
                </TypographyText>
                <TypographyText font="14" color="white">
                    <EventNoteIcon />
                    2022-07-09
                </TypographyText>
                <TypographyText font="14" color="white">
                    <VisibilityIcon />
                    48 baxış
                </TypographyText>
            </TagContent>
        </TitleContentStyled>
    )
} 