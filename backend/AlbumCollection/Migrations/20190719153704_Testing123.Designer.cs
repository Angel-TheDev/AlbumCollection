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
    [Migration("20190719153704_Testing123")]
    partial class Testing123
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.11-servicing-32099")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("AlbumCollection.Model.Album", b =>
                {
                    b.Property<int>("AlbumId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("ArtistId");

                    b.Property<string>("ImageURL");

                    b.Property<string>("Name");

                    b.Property<string>("RecordLabel");

                    b.HasKey("AlbumId");

                    b.ToTable("Albums");

                    b.HasData(
                        new { AlbumId = 1, ArtistId = 1, ImageURL = "", Name = "You Will Know the Fear you Made Us Feel", RecordLabel = "Seeing Red" },
                        new { AlbumId = 2, ArtistId = 2, ImageURL = "", Name = "The Sickness", RecordLabel = "Giant" },
                        new { AlbumId = 3, ArtistId = 3, ImageURL = "", Name = "Master of Puppets", RecordLabel = "Elektra" },
                        new { AlbumId = 4, ArtistId = 4, ImageURL = "", Name = "Promo", RecordLabel = "Unsigned" }
                    );
                });

            modelBuilder.Entity("AlbumCollection.Model.Artist", b =>
                {
                    b.Property<int>("ArtistId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("HomeTown");

                    b.Property<string>("ImageURL");

                    b.Property<string>("Name");

                    b.HasKey("ArtistId");

                    b.ToTable("Artists");

                    b.HasData(
                        new { ArtistId = 1, HomeTown = "San Francisco", ImageURL = "", Name = "Body Void" },
                        new { ArtistId = 2, HomeTown = "Chicago", ImageURL = "", Name = "Disturbed" },
                        new { ArtistId = 3, HomeTown = "Los Angeles", ImageURL = "", Name = "Metallica" },
                        new { ArtistId = 4, HomeTown = "Prague", ImageURL = "", Name = "Sněť" }
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
