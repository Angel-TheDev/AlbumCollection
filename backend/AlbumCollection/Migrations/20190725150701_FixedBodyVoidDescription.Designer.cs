﻿// <auto-generated />
using AlbumCollection;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace AlbumCollection.Migrations
{
    [DbContext(typeof(SiteContext))]
    [Migration("20190725150701_FixedBodyVoidDescription")]
    partial class FixedBodyVoidDescription
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.8-servicing-32085")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("AlbumCollection.Model.Album", b =>
                {
                    b.Property<int>("AlbumId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("ArtistId");

                    b.Property<string>("Description");

                    b.Property<string>("ImageURL");

                    b.Property<string>("Name");

                    b.Property<string>("RecordLabel");

                    b.HasKey("AlbumId");

                    b.HasIndex("ArtistId");

                    b.ToTable("Albums");

                    b.HasData(
                        new { AlbumId = 1, ArtistId = 1, Description = "The two-song EP follows a similar course structurally as I Live Inside A Burning House—sprawling song lengths and towering sludge-tinged doom. Each song, \"Die Off\" and \"Fascist Cancer,\" run almost 20 minutes long. Yet, the arrangements themselves are the product of a different lens for Ryan and Body Void.", ImageURL = "https://e.snmc.io/i/fullres/w/17b90006bd6052096d902e534424b88c/7396632", Name = "You Will Know the Fear you Made Us Feel", RecordLabel = "Seeing Red" },
                        new { AlbumId = 2, ArtistId = 2, Description = "The Sickness is the debut studio album by American heavy metal band Disturbed, released on March 7, 2000 by Giant and Reprise Records. The album peaked at number 29 on the US Billboard 200, and has spent a total of 103 weeks on the chart as of June 2011. It was Disturbed's only album to not hit number one on the US Billboard 200 until their seventh album Evolution debuted at number 4 in 2018.[4] In 2018, The Sickness was certified five times platinum by the RIAA for shipments of over five million copies in the US, making it the band's most successful album.[5]", ImageURL = "https://e.snmc.io/i/fullres/w/ad39112f0cd52ad0380ad013606013e3/4881298", Name = "The Sickness", RecordLabel = "Giant" },
                        new { AlbumId = 3, ArtistId = 3, Description = "Master of Puppets is the third studio album by American heavy metal band Metallica. It was released on March 3, 1986 by Elektra Records.[1] Recorded at the Sweet Silence Studios with producer Flemming Rasmussen, it was the first Metallica album released on a major record label. Master of Puppets was the band's last album to feature bassist Cliff Burton, who died in a bus accident in Sweden during the album's promotional tour. The album peaked at number 29 on the Billboard 200 and became the first thrash metal album to be certified platinum. It was certified 6× platinum by the Recording Industry Association of America (RIAA) in 2003 for shipping six million copies in the United States. The album was eventually certified 6× platinum by Music Canada and gold by the British Phonographic Industry (BPI).", ImageURL = "https://e.snmc.io/i/fullres/w/c828c3fab8dac29221da956c71d7f36a/3986151", Name = "Master of Puppets", RecordLabel = "Elektra" },
                        new { AlbumId = 4, ArtistId = 4, Description = "This album slaps extremely hard", ImageURL = "https://e.snmc.io/i/fullres/w/fe7456ca4b40d043ac9d458a8ac11a78/7473065", Name = "Promo", RecordLabel = "Unsigned" }
                    );
                });

            modelBuilder.Entity("AlbumCollection.Model.Artist", b =>
                {
                    b.Property<int>("ArtistId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description");

                    b.Property<string>("HomeTown");

                    b.Property<string>("ImageURL");

                    b.Property<string>("Name");

                    b.HasKey("ArtistId");

                    b.ToTable("Artists");

                    b.HasData(
                        new { ArtistId = 1, Description = "Body Void represents something much greater than heavy metal. The sludge-ridden crusted doom trio—in addition to crafting apocalyptically heavy music—is a loud and intellectual voice for inclusivity and awareness for the LGBTQIA+ community. For Body Void, their voice is loudest in metal music for obvious reasons. Their recent output, 2016's Ruins, and the impending I Live In A Burning House are visceral and soul-crushing edifices of doom metal. Yet, beneath the sonic waves are progressive messages through personal insight.", HomeTown = "San Francisco", ImageURL = "https://f4.bcbits.com/img/0008594647_10.jpg", Name = "Body Void" },
                        new { ArtistId = 2, Description = "Disturbed is an American heavy metal band from Chicago, formed in 1994. The band includes vocalist David Draiman, guitarist/keyboardist Dan Donegan, bassist John Moyer and drummer Mike Wengren. They have had very few lineup changes, with Donegan and Wengren being the 2 remaining original members. Former band members are vocalist Erich Awalt, and bassist Steve Kmak. The band has released seven studio albums, five of which have consecutively debuted at number one on the Billboard 200.[1] Disturbed went into hiatus in October 2011, during which the band's members focused on various side projects, and returned in June 2015, releasing their first album in four years, Immortalized, on August 21, 2015. They also recorded and released one live album, Disturbed: Live at Red Rocks on November 18, 2016, which was recorded on August 18, 2016, at Red Rocks Amphitheatre in Morrison, Colorado, located about 10 miles west of Denver, Colorado. Their seventh studio album, Evolution, was released on October 19, 2018.", HomeTown = "Chicago", ImageURL = "https://i0.wp.com/metalinjection.net/wp-content/uploads/2015/06/Disturbed1.jpg?fit=700%2C394&ssl=1", Name = "Disturbed" },
                        new { ArtistId = 3, Description = "Metallica is an American heavy metal band. The band was formed in 1981 in Los Angeles, California, by drummer Lars Ulrich and vocalist/guitarist James Hetfield, and has been based in San Francisco, California for most of its career.[1][2] The group's fast tempos, instrumentals and aggressive musicianship made them one of the founding \"big four\" bands of thrash metal, alongside Megadeth, Anthrax and Slayer. Metallica's current lineup comprises founding members Hetfield and Ulrich, longtime lead guitarist Kirk Hammett and bassist Robert Trujillo. Guitarist Dave Mustaine (who went on to form Megadeth) and bassists Ron McGovney, Cliff Burton and Jason Newsted are former members of the band.", HomeTown = "Los Angeles", ImageURL = "https://www.billboard.com/files/styles/article_main_image/public/media/metallica-1990s-portrait-billboard-1548.jpg", Name = "Metallica" },
                        new { ArtistId = 4, Description = "Recently formed in the Czech Republic, Sněť is a fresh new face in death metal. Their lo-fi aesthetic and death metal traditionalism combine to form blistering compositions that keep the heads banging. Their first demo, Promo, was recorded during a full moon, signaling the band's dedication to occultism.", HomeTown = "Prague", ImageURL = "https://f4.bcbits.com/img/0016043826_10.jpg", Name = "Sněť" }
                    );
                });

            modelBuilder.Entity("AlbumCollection.Model.Song", b =>
                {
                    b.Property<int>("SongId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("AlbumId");

                    b.Property<string>("Duration");

                    b.Property<string>("Name");

                    b.HasKey("SongId");

                    b.HasIndex("AlbumId");

                    b.ToTable("Songs");

                    b.HasData(
                        new { SongId = 1, AlbumId = 1, Duration = "19:10", Name = "Die Off" },
                        new { SongId = 2, AlbumId = 2, Duration = "4:40", Name = "Down With The Sickness" },
                        new { SongId = 3, AlbumId = 3, Duration = "6:30", Name = "Master of Puppets" },
                        new { SongId = 4, AlbumId = 4, Duration = "5:23", Name = "Intoxikace" }
                    );
                });

            modelBuilder.Entity("AlbumCollection.Model.Album", b =>
                {
                    b.HasOne("AlbumCollection.Model.Artist")
                        .WithMany("Albums")
                        .HasForeignKey("ArtistId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("AlbumCollection.Model.Song", b =>
                {
                    b.HasOne("AlbumCollection.Model.Album")
                        .WithMany("Songs")
                        .HasForeignKey("AlbumId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}