using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlbumCollection.Model
{
    public class Song
    {
        public int SongId { get; set; }
        public string Title { get; set; }
        public string Duration { get; set; }
        public virtual int ArtistId { get; set; }

        public virtual Artist Artist { get; set; }



    }
}
