using Microsoft.AspNetCore.Mvc;

namespace mod09API.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<WeatherForecastController> _logger;

    public WeatherForecastController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetWeatherForecast")]
    public IEnumerable<WeatherForecast> Get()
    {
        return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        {
            Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            TemperatureC = Random.Shared.Next(-20, 55),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        })
        .ToArray();
    }

    [HttpGet("{id}", Name = "GetWeatherForecastById")]
    public ActionResult<string> GetById(int id)
    {
        if (id>= Summaries.Length || id < 0)
        {
            return NotFound();
        }
        return Summaries[id];
    }

    [HttpGet("{year}/{month}/{day}")]
    //public string Get(int year, int month, int day) //會有無法轉型的錯誤
    public ActionResult<string> Get(int year, int month, int day)
    {
        DateOnly d;
        try
        {
            //d = new(year, month, day);
            d = new DateOnly(year, month, day);
        }
        catch (Exception e) {
            Console.WriteLine(e);
            return BadRequest();
        }
        return d.ToString();
    }

}
