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
        public DbSet<Album>Albums { get; set; }
        public DbSet<Song> Songs { get; set; }

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
                    ImageURL = "https://f4.bcbits.com/img/0008594647_10.jpg",
                    HomeTown = "San Francisco",
                    Description = "Body Void represents something much greater than heavy metal. The sludge-ridden crusted doom trio—in addition to crafting apocalyptically heavy music—is a loud and intellectual voice for inclusivity and awareness for the LGBTQIA+ community. For Body Void, their voice is loudest in metal music for obvious reasons. Their recent output, 2016's Ruins, and the impending I Live In A Burning House are visceral and soul-crushing edifices of doom metal. Yet, beneath the sonic waves are progressive messages through personal insight."
                },
                new Artist()
                {
                    ArtistId = 2,
                    Name = "Disturbed",
                    ImageURL = "https://i0.wp.com/metalinjection.net/wp-content/uploads/2015/06/Disturbed1.jpg?fit=700%2C394&ssl=1",
                    HomeTown = "Chicago",
                    Description = "Disturbed is an American heavy metal band from Chicago, formed in 1994. The band includes vocalist David Draiman, guitarist/keyboardist Dan Donegan, bassist John Moyer and drummer Mike Wengren. They have had very few lineup changes, with Donegan and Wengren being the 2 remaining original members. Former band members are vocalist Erich Awalt, and bassist Steve Kmak. The band has released seven studio albums, five of which have consecutively debuted at number one on the Billboard 200.[1] Disturbed went into hiatus in October 2011, during which the band's members focused on various side projects, and returned in June 2015, releasing their first album in four years, Immortalized, on August 21, 2015. They also recorded and released one live album, Disturbed: Live at Red Rocks on November 18, 2016, which was recorded on August 18, 2016, at Red Rocks Amphitheatre in Morrison, Colorado, located about 10 miles west of Denver, Colorado. Their seventh studio album, Evolution, was released on October 19, 2018."
                },
                new Artist()
                {
                    ArtistId = 3,
                    Name = "Metallica",
                    ImageURL = "https://www.billboard.com/files/styles/article_main_image/public/media/metallica-1990s-portrait-billboard-1548.jpg",
                    HomeTown = "Los Angeles",
                    Description = "Metallica is an American heavy metal band. The band was formed in 1981 in Los Angeles, California, by drummer Lars Ulrich and vocalist/guitarist James Hetfield, and has been based in San Francisco, California for most of its career.[1][2] The group's fast tempos, instrumentals and aggressive musicianship made them one of the founding \"big four\" bands of thrash metal, alongside Megadeth, Anthrax and Slayer. Metallica's current lineup comprises founding members Hetfield and Ulrich, longtime lead guitarist Kirk Hammett and bassist Robert Trujillo. Guitarist Dave Mustaine (who went on to form Megadeth) and bassists Ron McGovney, Cliff Burton and Jason Newsted are former members of the band."
                },
                new Artist()
                {
                    ArtistId = 4,
                    Name = "Sněť",
                    ImageURL = "https://f4.bcbits.com/img/0016043826_10.jpg",
                    HomeTown = "Prague",
                    Description = "Recently formed in the Czech Republic, Sněť is a fresh new face in death metal. Their lo-fi aesthetic and death metal traditionalism combine to form blistering compositions that keep the heads banging. Their first demo, Promo, was recorded during a full moon, signaling the band's dedication to occultism."
                }
                );

            modelBuilder.Entity<Album>().HasData(
                new Album()
                {
                    AlbumId = 1,
                    Name = "You Will Know the Fear you Made Us Feel",
                    ImageURL = "https://e.snmc.io/i/fullres/w/17b90006bd6052096d902e534424b88c/7396632",
                    RecordLabel = "Seeing Red",
                    Description = "The two-song EP follows a similar course structurally as I Live Inside A Burning House—sprawling song lengths and towering sludge-tinged doom. Each song, \"Die Off\" and \"Fascist Cancer,\" run almost 20 minutes long. Yet, the arrangements themselves are the product of a different lens for Ryan and Body Void.",
                    ArtistId = 1
                },
                new Album()
                {
                    AlbumId = 2,
                    Name = "The Sickness",
                    ImageURL = "https://e.snmc.io/i/fullres/w/ad39112f0cd52ad0380ad013606013e3/4881298",
                    RecordLabel = "Giant",
                    Description = "The Sickness is the debut studio album by American heavy metal band Disturbed, released on March 7, 2000 by Giant and Reprise Records. The album peaked at number 29 on the US Billboard 200, and has spent a total of 103 weeks on the chart as of June 2011. It was Disturbed's only album to not hit number one on the US Billboard 200 until their seventh album Evolution debuted at number 4 in 2018.[4] In 2018, The Sickness was certified five times platinum by the RIAA for shipments of over five million copies in the US, making it the band's most successful album.[5]",
                    ArtistId = 2
                },
                new Album()
                {
                    AlbumId = 3,
                    Name = "Master of Puppets",
                    ImageURL = "https://e.snmc.io/i/fullres/w/c828c3fab8dac29221da956c71d7f36a/3986151",
                    RecordLabel = "Elektra",
                    Description = "Master of Puppets is the third studio album by American heavy metal band Metallica. It was released on March 3, 1986 by Elektra Records.[1] Recorded at the Sweet Silence Studios with producer Flemming Rasmussen, it was the first Metallica album released on a major record label. Master of Puppets was the band's last album to feature bassist Cliff Burton, who died in a bus accident in Sweden during the album's promotional tour. The album peaked at number 29 on the Billboard 200 and became the first thrash metal album to be certified platinum. It was certified 6× platinum by the Recording Industry Association of America (RIAA) in 2003 for shipping six million copies in the United States. The album was eventually certified 6× platinum by Music Canada and gold by the British Phonographic Industry (BPI).",
                    ArtistId = 3
                },
                new Album()
                {
                    AlbumId = 4,
                    Name = "Promo",
                    ImageURL = "https://e.snmc.io/i/fullres/w/fe7456ca4b40d043ac9d458a8ac11a78/7473065",
                    RecordLabel = "Unsigned",
                    Description = "This album slaps extremely hard",
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