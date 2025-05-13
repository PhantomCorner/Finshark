using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Stock;
using api.DTOs.Stock;
using api.Interfaces;
using api.Mappers;
using api.Models;
using Newtonsoft.Json;

namespace api.Service
{
    public class FMPService : IFMPService
    {
        private HttpClient _httpClient;
        private IConfiguration _cfg;
        public FMPService(HttpClient httpClient, IConfiguration cfg)
        {
            _httpClient = httpClient;
            _cfg = cfg;
        }
        public async Task<Stock> FindStockBySymbolAsync(string symbol)
        {
            try
            {
                var res = await _httpClient.GetAsync($"https://financialmodelingprep.com/stable/profile?symbol={symbol}&apikey={_cfg["FMPKey"]}");
                if (res.IsSuccessStatusCode)
                {
                    var content = await res.Content.ReadAsStringAsync();
                    var tasks = JsonConvert.DeserializeObject<FMPStock[]>(content);
                    var stock = tasks[0];
                    if (stock != null)
                    {
                        return stock.ToStockFromFMP();
                    }
                    return null;
                }
                return null;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }
    }
}