using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlbumCollection.Model
{
    public class Artist
    {
        public int ArtistId { get; set; }
        public string Name { get; set; }
        public string ImageURL { get; set; }
        public string HomeTown { get; set; }
        public string Description { get; set; }

        public virtual List<Album> Albums { get; set; }

        

    }
}
