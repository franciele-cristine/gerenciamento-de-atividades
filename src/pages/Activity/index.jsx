import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {motion} from 'framer-motion';
import {
    Container,
    Title,
    Date,
    Header,
    Description,
    StyledLink,
    List,
    ListItem,
    ListContainer,
    Subtitle
} from './style';
import {Button} from '../Login/style';
import {useHistory} from 'react-router-dom';

const Activity = () =>{
    const {id} = useParams();
    const history = useHistory();
    const activities = useSelector(state => state.activities);
    const activity = activities.filter((activity) => activity.id.toString() === id);

    return(
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
            <Container>
                {activity.map(({name, date, description, students, link}, index) =>{
                    return(
                        <div key={index}>
                            <Header>
                                <Title>{name}</Title>
                                <Date>{date}</Date>
                            </Header>
                           { link && <StyledLink href={link} target="blank">Link da Atividade</StyledLink>}
                            <Subtitle>Descrição</Subtitle>
                            <Description>{description}</Description>
                            <ListContainer>
                                <List>
                                    <Subtitle>Alunos</Subtitle>
                                {students && students.map((student, index) =>{
                                    return(
                                        <ListItem key={index}>{student}</ListItem>
                                    )
                                })}
                                </List>
                            </ListContainer>
                            <Button onClick={() => history.push("/activities")}>Voltar</Button>
                        </div>
                        )
                })}
            </Container>
            </motion.div>
    )
}

export default Activity;
