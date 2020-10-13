﻿// <auto-generated />
using FamilySearchYouthAPI.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace FamilySearchYouthAPI.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.8");

            modelBuilder.Entity("FamilySearchYouthAPI.Models.Region", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("KmlUrl")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Regions");
                });

            modelBuilder.Entity("FamilySearchYouthAPI.Models.RegionalInformation", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("ChurchOfJesusChristOfLatterDaySaintsStory")
                        .HasColumnType("TEXT");

                    b.Property<string>("Clothing")
                        .HasColumnType("TEXT");

                    b.Property<string>("Economy")
                        .HasColumnType("TEXT");

                    b.Property<string>("FamilyStructure")
                        .HasColumnType("TEXT");

                    b.Property<string>("FamousPeople")
                        .HasColumnType("TEXT");

                    b.Property<string>("Folklore")
                        .HasColumnType("TEXT");

                    b.Property<string>("Food")
                        .HasColumnType("TEXT");

                    b.Property<string>("Geography")
                        .HasColumnType("TEXT");

                    b.Property<string>("Government")
                        .HasColumnType("TEXT");

                    b.Property<string>("HistoricalEvents")
                        .HasColumnType("TEXT");

                    b.Property<string>("Holidays")
                        .HasColumnType("TEXT");

                    b.Property<string>("Migrations")
                        .HasColumnType("TEXT");

                    b.Property<string>("Military")
                        .HasColumnType("TEXT");

                    b.Property<string>("Money")
                        .HasColumnType("TEXT");

                    b.Property<string>("Music")
                        .HasColumnType("TEXT");

                    b.Property<string>("Occupations")
                        .HasColumnType("TEXT");

                    b.Property<int>("PeriodId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Pioneers")
                        .HasColumnType("TEXT");

                    b.Property<int>("RegionId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("RegionName")
                        .HasColumnType("TEXT");

                    b.Property<string>("Religion")
                        .HasColumnType("TEXT");

                    b.Property<string>("Sports")
                        .HasColumnType("TEXT");

                    b.Property<string>("Technology")
                        .HasColumnType("TEXT");

                    b.Property<string>("Temples")
                        .HasColumnType("TEXT");

                    b.Property<string>("Wars")
                        .HasColumnType("TEXT");

                    b.Property<string>("Weather")
                        .HasColumnType("TEXT");

                    b.Property<string>("Wildlife")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("RegionId")
                        .IsUnique();

                    b.ToTable("RegionalInformation");
                });

            modelBuilder.Entity("FamilySearchYouthAPI.Models.RegionalInformation", b =>
                {
                    b.HasOne("FamilySearchYouthAPI.Models.Region", null)
                        .WithOne("RegionalInformation")
                        .HasForeignKey("FamilySearchYouthAPI.Models.RegionalInformation", "RegionId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
