import { getContracts } from "./getContracts";
jest.mock("axios", () => {
  return { get: () => Promise.resolve({ data: { response: "response" } }) };
});

describe("[ statistic / getContracts ]", () => {
  describe("when  `getContract` is called", () => {
    it("should call `setIsLoading` with `true`", async () => {
      //arrange
      const setIsLoading = jest.fn();
      const filter = { category: "categoria", year: "year" };
      const setContractsChars = () => {};
      //act
      await getContracts({ setIsLoading, filter, setContractsChars });

      //assert
      expect(setIsLoading).toHaveBeenCalledWith(true);
    });
    it("should call `axios.get` with params", () => {
      //arrange
      //act
      //assert
    });
    it("should call `SetContractsChars` with `data.response`", async () => {
      //arrange
      const setIsLoading = () => {};
      const filter = { category: "categoria", year: "year" };
      const setContractsChars = jest.fn();
      //act
      await getContracts({ setIsLoading, filter, setContractsChars });

      //assert
      expect(setContractsChars).toHaveBeenCalledWith("response");
    });
    it("should call `setIsLoading` with `false`", () => {
      //arrange
      //act
      //assert
    });
  });
});
