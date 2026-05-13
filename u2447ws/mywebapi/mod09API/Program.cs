using Microsoft.EntityFrameworkCore;
using mod09API.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddSwaggerGen();

//資料庫連線
builder.Services.AddDbContext<MeetingRoomContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("MeetingDB")));

var app = builder.Build();

// Configure the HTTP request pipeline.
//開發模式才執行
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwagger();
    app.UseSwaggerUI();  

    using (var scope = app.Services.CreateScope())
    {
        var services = scope.ServiceProvider;
        var context = services.GetRequiredService<MeetingRoomContext>();
        DbInitializer.Initialize(context);
    }      
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
