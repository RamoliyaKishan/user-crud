import { Container,
  Paper,
  Typography,    
  Box,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Container>
       <Paper component={Box} width="70%" mx="auto" mt="100px">
          <Typography align="center" color="primary">
              <h3>Version 1.0.0</h3>
              <h4>Thanks for your support🙏🙏🙏</h4>
              <Link to='/'>Go Back</Link>
          </Typography>
        </Paper>

    </Container>
  )
}

export default About