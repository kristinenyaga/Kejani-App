import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
const useStyles = makeStyles({
  root: {
    width: '80%',
  },
  thumb: {
    color: '#000',
  },
  rail: {
    color: `rgba(0, 0, 0, 0.26)`,
  },
  track: {
    color: '#000',
  },
});
function PriceFilter({ value, changePrice,units,setUnits,selectedPrice,setSelectedPrice }) {
  
  const classes = useStyles();
  const handleChangePrice = (event, selectedPrice) => {
    setSelectedPrice(selectedPrice);
  const minPrice = selectedPrice[0];
  const maxPrice = selectedPrice[1];
  setUnits(
    units.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
      )
  )
  
  };

  


  return (
    <div className={classes.root}>
      <Slider
         value={selectedPrice}
         onChange={handleChangePrice}
        valueLabelDisplay='on'
        min={5000}
        max={50000}
        classes={{
          thumb: classes.thumb,
          rail: classes.rail,
          track: classes.track,
        }}
      />
    </div>
  )
}
export default PriceFilter