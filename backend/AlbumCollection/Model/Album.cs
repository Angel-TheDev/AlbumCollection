using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlbumCollection.Model
{
    public class Album
    {
        public int AlbumId { get; set; }
        public string Name { get; set; }
        public string ImageURL { get; set; }
        public string RecordLabel { get; set; }
        public int ArtistId { get; set; }
        
        //public virtual Artist Artist { get; set; }
        public virtual List<Song> Songs { get; set; }

    }
}
