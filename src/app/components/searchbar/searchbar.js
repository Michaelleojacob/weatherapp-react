import { TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { LoadingButton } from "@mui/lab";

const SearchBar = ({ location, handleLocation, handleSubmitLocation }) => {
  return (
    <>
      <form className="searchbar-form" onSubmit={handleSubmitLocation}>
        <TextField
          className="searchbar-input"
          label="Location"
          variant="outlined"
          onChange={handleLocation}
          value={location}
        ></TextField>
        <Button
          variant="outlined"
          type="submit"
          size="large"
          className="searchbar-btn"
        >
          <SearchIcon className="searchbar-icon" size="large" />
        </Button>
      </form>
    </>
  );
};

export default SearchBar;
