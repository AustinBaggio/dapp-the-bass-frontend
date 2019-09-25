import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { getWhois } from "./api/query";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © A&A "}
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  form: {
    width: "100%"
  },
  card: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  row: {
    display: "flex",
    flexDirection: "row"
  }
}));

const App: React.FC = () => {
  const classes = useStyles();
  const [name, setName] = React.useState("");
  React.useEffect(() => {
    // getWhois("austin").then((info) => console.log(info))
  }, []);

  const obj = {
    height: "0",
    result: {
      value: "1.1.1.1",
      owner: "123x123123123123123123123123123123123",
      price: [
        {
          denom: "nametoken",
          amount: "10"
        }
      ]
    }
  };
  return (
    <Container component="main" maxWidth="md">
      <div className={classes.paper}>
        <Typography variant="h5">Lookup a name on node "NODE"</Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="name"
            label="Enter a name"
            name="name"
            autoFocus
            onChange={e => {
              setName(e.target.value);
            }}
          />
        </form>
        <ul>{name}</ul>
      </div>

      <div className={classes.card}>
        <Card>
          <CardHeader
            title={"IP: " + obj.result.value}
            subheader={"Owner Addr: " + obj.result.owner}
            titleTypographyProps={{ align: "left" }}
            subheaderTypographyProps={{ align: "left" }}
          />
          <CardContent>
            <div
            style={{marginTop:'-16px'}}
            >
              <Typography color="textPrimary">
                Currency: {obj.result.price[obj.result.price.length - 1].denom}
                <br />
                Ammount: {obj.result.price[obj.result.price.length - 1].amount}
              </Typography>
            </div>
          </CardContent>
          <form noValidate>
            <div className={classes.row}>
              <TextField
                variant="outlined"
                id="bid"
                fullWidth
                label="Enter a higher bid"
                name="bid"
                autoFocus
              />
              <Button fullWidth variant="contained">
                Submit Bid
              </Button>
            </div>
          </form>
        </Card>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};
export default App;
