import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LoadingButton from "@mui/lab/LoadingButton";

const SearchBar = ({
  location,
  handleLocation,
  handleSubmitLocation,
  loading,
}) => {
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
        <LoadingButton
          loading={loading}
          variant="outlined"
          type="submit"
          size="large"
          className="searchbar-btn"
        >
          <SearchIcon className="searchbar-icon" size="large" />
        </LoadingButton>
      </form>
    </>
  );
};

export default SearchBar;
