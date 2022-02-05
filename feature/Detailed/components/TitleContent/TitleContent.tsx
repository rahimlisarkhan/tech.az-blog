
import PersonIcon from '@mui/icons-material/Person';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EventNoteIcon from '@mui/icons-material/EventNote';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TypographyText from "../../../../components/Typograph"
import { TagContent, TitleContentStyled } from './TitleContent.styled';
import { useSelector } from '../../../../hooks/useSelector';


export const TitleContent = () => {

  let appMode = useSelector(state => state.home.appMode)
  let newsSlug = useSelector(state => state.home.newsSlug)


    const colorMode = () => {
        if(appMode){
            return "black"
        }
  
        return "white"
    }

    return (
        <TitleContentStyled>
            <TypographyText font="24" color={colorMode()} bold="true">
               {newsSlug?.title}
            </TypographyText>
            <TagContent>
                <TypographyText font="14" color={colorMode()}>
                    <PersonIcon />
                    {newsSlug?.owner}
                </TypographyText>
                <TypographyText font="14" color={colorMode()}>
                    <LocalOfferIcon />
                    {newsSlug?.tag?.map(item=> ` ${item.title} `)}
                </TypographyText>
                <TypographyText font="14" color={colorMode()}>
                    <EventNoteIcon />
                    {newsSlug?.created_at}
                </TypographyText>
                <TypographyText font="14" color={colorMode()}>
                    <VisibilityIcon />
                    {newsSlug?.views} baxış
                </TypographyText>
            </TagContent>
        </TitleContentStyled>
    )
} 