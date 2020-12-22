const mockUserRespository = require('../../test/stub/userRepository');
const mockCoinService = require('../../test/stub/coinService');
const userRepository = require('../repository/user');
const coinService = require('./coin');
const userService = require('./user');
const userDataTest = require('../../test/mock/user');
const { responseApi } = require('../../test/mock/coins');
const jwt = require('../helpers/jwt');
const config = require('../config');
const { user: userDataMock, userWithCoins } = require('../../test/mock/user');

jest.mock('../repository/user', () => mockUserRespository);
jest.mock('./coin', () => mockCoinService);

describe('Service user', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe('AddCoin method', () => {
    it('Should call add coin repository method', async () => {
      await userService.addCoin();
      expect(userRepository.addCoin).toHaveBeenCalledTimes(1);
    });
  });

  describe('getCoins method', () => {
    describe('Order ascendant', () => {
      let data = [];
      beforeAll(async () => {
        data = await userService.getTopCoins(userDataTest.user.username, {
          limit: 25,
          order: 'asc',
        });
      });
      it(`Should call getDetailsCoin ${userDataTest.userWithCoins.Coins.length} times`, () => {
        expect(coinService.getDetailsCoin)
          .toHaveBeenCalledTimes(userDataTest.userWithCoins.Coins.length);
      });

      it('Should return a array of coins', async () => {
        expect(data).toHaveLength(userDataTest.userWithCoins.Coins.length);
      });
      it('Should return ordered array', () => {
        expect(data[0].symbol).toBe('ltc');
        expect(data[1].symbol).toBe('btc');
      });
    });
    describe('Order descendant', () => {
      let data = [];
      beforeAll(async () => {
        jest.spyOn(mockCoinService, 'getDetailsCoin')
          .mockResolvedValue({})
          .mockResolvedValueOnce({ data: responseApi[0] })
          .mockResolvedValueOnce({ data: responseApi[1] })
          .mockResolvedValueOnce({ data: responseApi[2] })
          .mockResolvedValueOnce({ data: responseApi[3] });
        data = await userService.getTopCoins(userDataTest.user.username, {
          limit: 25,
          order: 'desc',
        });
      });
      it(`Should call getDetailsCoin ${userDataTest.userWithCoins.Coins.length} times`, () => {
        expect(coinService.getDetailsCoin)
          .toHaveBeenCalledTimes(userDataTest.userWithCoins.Coins.length);
      });

      it('Should return a array of coins', async () => {
        expect(data).toHaveLength(userDataTest.userWithCoins.Coins.length);
      });
      it('Should return ordered array', () => {
        expect(data[0].symbol).toBe('ltc2');
        expect(data[1].symbol).toBe('btc');
      });
    });
    describe('Limit the coins', () => {
      let data = [];
      beforeAll(async () => {
        jest.spyOn(mockCoinService, 'getDetailsCoin')
          .mockResolvedValue({})
          .mockResolvedValueOnce({ data: responseApi[0] })
          .mockResolvedValueOnce({ data: responseApi[1] })
          .mockResolvedValueOnce({ data: responseApi[2] })
          .mockResolvedValueOnce({ data: responseApi[3] });
        data = await userService.getTopCoins(userDataTest.user.username, {
          limit: 1,
          order: 'desc',
        });
      });
      it('Should return a array of coins', async () => {
        expect(data).toHaveLength(1);
      });
      it('Should return ordered array', () => {
        expect(data[0].symbol).toBe('ltc2');
      });
    });
    describe('User not found', () => {
      it('Should throw an error', async () => {
        jest.spyOn(userRepository, 'getCoins').mockResolvedValue(undefined);
        await expect(userService.getTopCoins(userDataTest.user.username, {
          limit: 1,
          order: 'desc',
        })).rejects.toEqual(new Error('user not found'));
      });
    });
    describe('Coin not found', () => {
      afterEach(() => {
        jest.clearAllMocks();
      });
      it('Should throw an error', async () => {
        jest.spyOn(userRepository, 'getCoins').mockResolvedValue({ username: 'PedritoNuevo', Coins: [] });

        await expect(userService.getTopCoins(userDataTest.user.username, {
          limit: 1,
          order: 'desc',
        })).rejects.toEqual(new Error('coin not found'));
      });
    });
  });
  describe('createOne method', () => {
    it('Should call createOne repository method', async () => {
      await userService.createOne();
      expect(userRepository.createOne).toHaveBeenCalledTimes(1);
    });
  });
  describe('getByUsername method', () => {
    it('Should call findOne repository method', async () => {
      await expect(userService.getByUsername('Pedro')).resolves.toEqual(userDataMock);
      expect(userRepository.findOne).toHaveBeenCalledTimes(1);
    });
  });
  describe('getByUsername method', () => {
    it('Should call findOne repository method', async () => {
      await expect(userService.getById('Pedro')).resolves.toEqual(userDataMock);
      expect(userRepository.findOne).toHaveBeenCalledTimes(1);
    });
  });
  describe('getCoins method', () => {
    it('Should call getCoins repository method', async () => {
      jest.spyOn(userRepository, 'getCoins').mockResolvedValue(userWithCoins);
      await expect(userService.getCoins('Pedro')).resolves.toEqual(userWithCoins);
      expect(userRepository.getCoins).toHaveBeenCalledTimes(1);
    });
  });
  describe('generateToken  method', () => {
    it('Should create a token valid', async () => {
      const token = userService.generateToken({ username: 'Pedrito', id: 123 });
      expect(jwt.verify(token, config.auth.secret)).toBeTruthy();
    });
  });
});
