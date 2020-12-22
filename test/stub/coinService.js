const { responseApi } = require('../mock/coins');

const getDetailsCoin = jest.fn()
  .mockResolvedValue({})
  .mockResolvedValueOnce({ data: responseApi[0] })
  .mockResolvedValueOnce({ data: responseApi[1] })
  .mockResolvedValueOnce({ data: responseApi[2] })
  .mockResolvedValueOnce({ data: responseApi[3] });

module.exports = {
  getDetailsCoin,
};
