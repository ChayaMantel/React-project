import { Container, Card, CardContent, Typography } from "@mui/material";
const Service = ({ name, description, }) => {

  return (
    <Container>
      <Card>
        <CardContent>
          <Typography variant="h5">
            name: {name}
          </Typography>
          <Typography variant="body1">
            description: {description}
          </Typography>

        </CardContent>
      </Card>
    </Container>
  );
};

export default Service;
