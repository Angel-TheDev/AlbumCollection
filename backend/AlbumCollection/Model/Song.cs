﻿using System;
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
        public virtual int AlbumId { get; set; }

        public virtual Album Album { get; set; }



    }
}
