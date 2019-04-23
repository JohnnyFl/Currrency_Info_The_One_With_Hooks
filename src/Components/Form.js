import React from "react";
// import { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
// import TextField from "@material-ui/core/TextField";
import EUR from "../images/EUR.png";
import USD from "../images/USD.png";
import UAH from "../images/UAH.png";
import PLN from "../images/PLN.png";
import RUB from "../images/RUB.png";
import BTC from "../images/BTC.png";
import "../styles/Form.css";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    backgroundColor: "#182027",
    color: "#BFBFBF",
    fontFamily: "Roboto"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "15%"
  },
  selector: {
    color: "#BFBFBF"
  }
});

const currencies = [
  { name: "USD", img: USD },
  { name: "EUR", img: EUR },
  { name: "UAH", img: UAH },
  { name: "PLN", img: PLN },
  { name: "RUB", img: RUB },
  { name: "BTC", img: BTC }
];

const Form = props => {
  // const [currency, setCurrency] = useState("USD");
  // const [currency2, setCurrency2] = useState("UAH");
  let date = new Intl.DateTimeFormat("en-US").format(new Date());
  const { classes } = props;

  // const handleClick = () => {
  //   setCurrency(currency2);
  //   setCurrency2(currency);
  // };

  return (
    <Paper className={classes.root} elevation={1}>
      <header>
        {/* functional for a new API */}
        {/* <FormControl className={classes.formControl}>
          <Select
            value={currency}
            onChange={e => setCurrency(e.target.value)}
            id="currency"
            className={classes.selector}
          >
            {currencies.map(currency => (
              <MenuItem key={currency.name} value={currency.name}>
                {currency.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl> */}
        <span className="date">{date}</span>
      </header>

      <table>
        <tbody>
          {currencies.map(currency => (
            <tr key={currency.name}>
              <th>
                <img src={currency.img} alt={currency.name} />
              </th>
              <th>{currency.name}</th>
              <th>{props.data.quotes["USD" + currency.name]}$</th>
            </tr>
          ))}
        </tbody>
      </table>
      {/* functional for a new API */}
      {/* <div className="converter">
        <TextField
          id="input-currency"
          label="Amount"
          className={classes.textField}
          margin="normal"
        />
        <div className="currency-name">{currency}</div>
        <div className="icon">
          <i className="material-icons" onClick={handleClick}>
            compare_arrows
          </i>
        </div>

        <TextField
          id="input-currency"
          label="Amount"
          className={classes.textField}
          margin="normal"
        />
        <div className="currency-name">{currency2}</div>
      </div> */}
    </Paper>
  );
};

Form.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Form);
