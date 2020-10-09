using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FamilySearchYouthAPI.Data;
using FamilySearchYouthAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FamilySearchYouthAPI.Controllers
{

    public class RegionInputDto
    {
        public string Name { get; set; }
        public string KmlUrl { get; set; }
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
                .ToListAsync();
            return Ok(regions);
        }

        [HttpPost]
        public async Task<IActionResult> AddRegion(RegionInputDto regionInput)
        {
            Region region = new Region
            {
                Name = regionInput.Name,
                KmlUrl = regionInput.KmlUrl
            };
            _context.Add(region);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}
