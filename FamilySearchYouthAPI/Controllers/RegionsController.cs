using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FamilySearchYouthAPI.Data;
using FamilySearchYouthAPI.Models;
using FamilySearchYouthAPI.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FamilySearchYouthAPI.Controllers
{

    public class RegionInputDto
    {
        public string Name { get; set; }
        public string RawCoordinates { get; set; }
    }

    [Route("api/[controller]")]
    [ApiController]
    public class RegionsController : ControllerBase
    {
        private readonly DataContext _context;
        public RegionsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllRegions()
        {
            var regions = await _context.Regions
                .Include(c => c.Coordinates)
                .ToListAsync();
            return Ok(regions);
        }

        [HttpPost]
        public async Task<IActionResult> AddRegion(RegionInputDto regionInput)
        {
            CoordinateParser coordinateParser = new CoordinateParser();
            Coordinate[] parsedCoordinates = coordinateParser.Parse(regionInput.RawCoordinates);
            Region region = new Region
            {
                Name = regionInput.Name,
                Coordinates = parsedCoordinates
            };
            _context.Add(region);
            await _context.SaveChangesAsync();
            return Ok(parsedCoordinates);
        }
    }
}
