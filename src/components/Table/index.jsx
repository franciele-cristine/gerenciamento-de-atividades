import {
    Container,
    StyledTable,
    TableHead,
    TableRow,
    TableCell,
    Icon,
    StyledLink
} from './style';
import {Link, useHistory} from 'react-router-dom';
import {ImBin2} from 'react-icons/im';
import {Button} from '../../pages/Login/style';

const Table = ({title, info, details, remove, data, detailsRoute, registerRoute, handleRemove, isActivity}) =>{
    const history = useHistory();
    return(
        <Container>
            <StyledTable>
                <TableRow>
                    <TableHead>{title}</TableHead>
                    <TableHead>{info}</TableHead>
                    <TableHead>{details}</TableHead>
                    <TableHead>{remove}</TableHead>
                </TableRow>
            {data.map((item, index) =>{
                return(
                    <TableRow key={index}>
                        <TableCell>{item.name}</TableCell>
                        {isActivity ? <TableCell>{item.date}</TableCell> : <TableCell>{item.group}</TableCell>}
                        <TableCell><StyledLink to={`/${detailsRoute}/${item.id}`}>+ detalhes</StyledLink></TableCell>
                        <TableCell><Icon onClick={() => {handleRemove(item.id)}}><ImBin2/></Icon></TableCell>
                    </TableRow>
                )
            })}
            </StyledTable>
            <Button onClick={() => history.push(`/${registerRoute}`)}>Cadastrar</Button>
        </Container>
    )
}

export default Table