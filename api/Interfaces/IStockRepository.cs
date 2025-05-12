using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.DTOs.Stock;
using api.Helpers;
using api.Models;

namespace api.Interfaces
{

    public interface IStockRepository
    {
        // get all stock
        Task<List<Stock>> GetAllAsync(QueryObject query);
        // get stock by id
        Task<Stock?> GetByIdAsync(int id); // First or default 可能是空值, 所以用 "?"

        // get stock by symbol
        Task<Stock?> GetBySymbolAsync(string symbol);

        // create a stock
        Task<Stock> CreateStock(Stock stockModel);

        // update a stock
        Task<Stock?> UpdateStockAsync(int id, UpdateStockRequestDTO stockRequestDTO);

        // remove a stock

        Task<Stock?> DeleteStockAsync(int id);

        // check if a stock exists

        Task<bool> StockExist(int id);


        Task<Stock?> CreateAsync(Stock stockModel);
    }
}