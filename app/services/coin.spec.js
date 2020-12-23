const mockCoinRespository = require('../../test/stub/coinRepository');
const mockHttpHelper = require('../../test/stub/httpHelper');
const coinRepository = require('../repository/coin');
const coinService = require('./coin');
const coinDataTest = require('../../test/mock/coins');
const http = require('../utils/http');

jest.mock('../repository/coin', () => mockCoinRespository);
jest.mock('../utils/http', () => mockHttpHelper);

describe('Coin service', () => {
  describe('GetCoinByid method', () => {
    let coin = {};
    beforeAll(async () => {
      coin = await coinService.getCoinById(1);
    });
    afterAll(() => {
      jest.clearAllMocks();
    });
    it('Should return a coin', () => {
      expect(coin).toEqual(coinDataTest.coins[0]);
    });
    it('Should call the findOne method one time', () => {
      expect(coinRepository.findOne).toHaveBeenCalledTimes(1);
    });
  });

  describe('getDetailsCoin method', () => {
    const coinResponseApi = { data: { ...coinDataTest.responseApi[0] } };
    let data = {};
    beforeAll(async () => {
      jest.spyOn(http, 'request').mockResolvedValue(coinResponseApi);
      data = await coinService.getDetailsCoin();
    });
    afterAll(() => {
      jest.clearAllMocks();
    });
    it('Should return response coin data', async () => {
      expect(data).toEqual(coinResponseApi);
    });
    it('Should call request method', () => {
      expect(http.request).toHaveBeenCalledTimes(1);
    });
  });
  describe('getAll method', () => {
    const coinResponseApi = { data: coinDataTest.getAllResponseApi };
    let data = {};
    beforeAll(async () => {
      jest.spyOn(http, 'request').mockResolvedValue(coinResponseApi);
      data = await coinService.getAll();
    });
    afterAll(() => {
      jest.clearAllMocks();
    });
    it('Should return response with all coins data', async () => {
      expect(data).toEqual(coinResponseApi);
    });
    it('Should call request method', () => {
      expect(http.request).toHaveBeenCalledTimes(1);
    });
    it(`Should be an array of ${coinDataTest.getAllResponseApi.length}`, () => {
      expect(data.data).toHaveLength(coinDataTest.getAllResponseApi.length);
    });
  });
});
