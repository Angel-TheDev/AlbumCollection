using Microsoft.EntityFrameworkCore.Migrations;

namespace AlbumCollection.Migrations
{
    public partial class AddedAlbumDescriptions : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Albums",
                keyColumn: "AlbumId",
                keyValue: 1,
                column: "Description",
                value: "The two-song EP follows a similar course structurally as I Live Inside A Burning House—sprawling song lengths and towering sludge-tinged doom. Each song, \"Die Off\" and \"Fascist Cancer,\" run almost 20 minutes long. Yet, the arrangements themselves are the product of a different lens for Ryan and Body Void.");

            migrationBuilder.UpdateData(
                table: "Albums",
                keyColumn: "AlbumId",
                keyValue: 2,
                column: "Description",
                value: "The Sickness is the debut studio album by American heavy metal band Disturbed, released on March 7, 2000 by Giant and Reprise Records. The album peaked at number 29 on the US Billboard 200, and has spent a total of 103 weeks on the chart as of June 2011. It was Disturbed's only album to not hit number one on the US Billboard 200 until their seventh album Evolution debuted at number 4 in 2018.[4] In 2018, The Sickness was certified five times platinum by the RIAA for shipments of over five million copies in the US, making it the band's most successful album.[5]");

            migrationBuilder.UpdateData(
                table: "Albums",
                keyColumn: "AlbumId",
                keyValue: 3,
                column: "Description",
                value: "Master of Puppets is the third studio album by American heavy metal band Metallica. It was released on March 3, 1986 by Elektra Records.[1] Recorded at the Sweet Silence Studios with producer Flemming Rasmussen, it was the first Metallica album released on a major record label. Master of Puppets was the band's last album to feature bassist Cliff Burton, who died in a bus accident in Sweden during the album's promotional tour. The album peaked at number 29 on the Billboard 200 and became the first thrash metal album to be certified platinum. It was certified 6× platinum by the Recording Industry Association of America (RIAA) in 2003 for shipping six million copies in the United States. The album was eventually certified 6× platinum by Music Canada and gold by the British Phonographic Industry (BPI).");

            migrationBuilder.UpdateData(
                table: "Albums",
                keyColumn: "AlbumId",
                keyValue: 4,
                column: "Description",
                value: "This album slaps extremely hard");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Albums",
                keyColumn: "AlbumId",
                keyValue: 1,
                column: "Description",
                value: null);

            migrationBuilder.UpdateData(
                table: "Albums",
                keyColumn: "AlbumId",
                keyValue: 2,
                column: "Description",
                value: null);

            migrationBuilder.UpdateData(
                table: "Albums",
                keyColumn: "AlbumId",
                keyValue: 3,
                column: "Description",
                value: null);

            migrationBuilder.UpdateData(
                table: "Albums",
                keyColumn: "AlbumId",
                keyValue: 4,
                column: "Description",
                value: null);
        }
    }
}
