using Microsoft.EntityFrameworkCore.Migrations;

namespace AlbumCollection.Migrations
{
    public partial class FixedBodyVoidDescription : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Artists",
                keyColumn: "ArtistId",
                keyValue: 1,
                column: "Description",
                value: "Body Void represents something much greater than heavy metal. The sludge-ridden crusted doom trio—in addition to crafting apocalyptically heavy music—is a loud and intellectual voice for inclusivity and awareness for the LGBTQIA+ community. For Body Void, their voice is loudest in metal music for obvious reasons. Their recent output, 2016's Ruins, and the impending I Live In A Burning House are visceral and soul-crushing edifices of doom metal. Yet, beneath the sonic waves are progressive messages through personal insight.");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Artists",
                keyColumn: "ArtistId",
                keyValue: 1,
                column: "Description",
                value: "San Francisco's Body Void represents something much greater than heavy metal. The sludge-ridden crusted doom trio—in addition to crafting apocalyptically heavy music—is a loud and intellectual voice for inclusivity and awareness for the LGBTQIA+ community. For Body Void, their voice is loudest in metal music for obvious reasons. Their recent output, 2016's Ruins, and the impending I Live In A Burning House are visceral and soul-crushing edifices of doom metal. Yet, beneath the sonic waves are progressive messages through personal insight.");
        }
    }
}
