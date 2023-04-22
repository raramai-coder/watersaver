import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function LanguageSelector(props) {
  const classes = useStyles();
  const [language, setLanguage] = useState(props.defaultLanguage);

  const handleChange = (event) => {
    setLanguage(event.target.value);
    props.onLanguageChange(event.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="language-label">Language</InputLabel>
      <Select
        labelId="language-label"
        id="language"
        value={language}
        onChange={handleChange}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="en">Zulu</MenuItem>
        <MenuItem value="en">Xhosa</MenuItem>
      </Select>
    </FormControl>
  );
}

export default LanguageSelector;
