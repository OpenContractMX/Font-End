import axios from "axios";

const API_BASE = "https://opencontractsmx.herokuapp.com/api/contracts?";

export const getContracts = async ({
  setIsLoading,
  setContractsChars,
  filter,
}) => {
  setIsLoading(true);
  try {
    const { data } = await axios.get(
      `${API_BASE}category=${filter.category}&year=${filter.year}`,
      { headers: { "Access-Control-Allow-Origin": "*" } }
    );
    setContractsChars(data.response);
    setIsLoading(false);
  } catch (error) {
    console.log(error);
  }
};
