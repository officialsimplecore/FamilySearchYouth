using FamilySearchYouthAPI.Models;
using FamilySearchYouthAPI.Services;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FamilySearchYouthAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Region>()
                .HasOne(c => c.RegionalInformation);

            modelBuilder.Entity<Region>()
                .HasMany(c => c.Coordinates);
        }

        public DbSet<Region> Regions { get; set; }
        public DbSet<RegionalInformation> RegionalInformation { get; set; }
    }
}
