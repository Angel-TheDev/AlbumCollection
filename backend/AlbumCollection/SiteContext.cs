using AlbumCollection.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlbumCollection
{
    public class SiteContext : DbContext
    {
        public DbSet<Artist>Artists { get; set; }
        //public DbSet<Album>Albums { get; set; }
        //public DbSet<Song> Songs { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = "Server=(localdb)\\mssqllocaldb;Database=DripCoffeeAlbumCollection;Trusted_Connection=True;";

            optionsBuilder.UseSqlServer(connectionString)
                          .UseLazyLoadingProxies();

            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Artist>().HasData(
                new Artist()
                {
                    ArtistId = 1,
                    Name = "Body Void",
                    ImageURL = "",
                    HomeTown = "San Francisco"
                },
                new Artist()
                {
                    ArtistId = 2,
                    Name = "Disturbed",
                    ImageURL = "",
                    HomeTown = "Chicago"
                },
                new Artist()
                {
                    ArtistId = 3,
                    Name = "Metallica",
                    ImageURL = "",
                    HomeTown = "Los Angeles"
                },
                new Artist()
                {
                    ArtistId = 4,
                    Name = "Sněť",
                    ImageURL = "",
                    HomeTown = "Prague"
                }
                );

            modelBuilder.Entity<Album>().HasData(
                new Album()
                {
                    AlbumId = 1,
                    Name = "You Will Know the Fear you Made Us Feel",
                    ImageURL = "",
                    RecordLabel = "Seeing Red",
                    ArtistId = 1
                },
                new Album()
                {
                    AlbumId = 2,
                    Name = "The Sickness",
                    ImageURL = "",
                    RecordLabel = "Giant",
                    ArtistId = 2
                },
                new Album()
                {
                    AlbumId = 3,
                    Name = "Master of Puppets",
                    ImageURL = "",
                    RecordLabel = "Elektra",
                    ArtistId = 3
                },
                new Album()
                {
                    AlbumId = 4,
                    Name = "Promo",
                    ImageURL = "",
                    RecordLabel = "Unsigned",
                    ArtistId = 4
                }
                );

            modelBuilder.Entity<Song>().HasData(
                new Song()
                {
                    SongId = 1,
                    Name = "Die Off",
                    Duration = "19:10",
                    AlbumId = 1
                },
                new Song()
                {
                    SongId = 2,
                    Name = "Down With The Sickness",
                    Duration = "4:40",
                    AlbumId = 2
                },
                new Song()
                {
                    SongId = 3,
                    Name = "Master of Puppets",
                    Duration = "6:30",
                    AlbumId = 3
                },
                new Song()
                {
                    SongId = 4,
                    Name = "Intoxikace",
                    Duration = "5:23",
                    AlbumId = 4
                }
                );



        }
    }
}