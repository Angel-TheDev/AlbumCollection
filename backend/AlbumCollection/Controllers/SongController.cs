using AlbumCollection.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlbumCollection.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SongController : ControllerBase
    {
        private SiteContext db;

        public SongController(SiteContext db)
        {
            this.db = db;
        }

        // GET api/Songs
        [HttpGet]
        public ActionResult<IEnumerable<Song>> Get()
        {
            return db.Songs;
        }

        [HttpGet("{id}")]
        public ActionResult<Song> GetById(int id)
        {
            return db.Songs.Single(a => a.SongId == id);
        }


        // POST api/Song
        [HttpPost]
        public ActionResult<Album> Post([FromBody] Song song)
        {
            db.Songs.Add(song);
            db.SaveChanges();
            return db.Albums.Single(a => a.AlbumId == song.AlbumId);
        }

        // PUT api/values/5
        [HttpPut]
        public ActionResult<IEnumerable<Song>> Put([FromBody] Song song)
        {
            db.Songs.Update(song);
            db.SaveChanges();
            return db.Songs.ToList();
        }


        [HttpDelete]
        public ActionResult<IEnumerable<Song>> Delete(Song song)
        {
            db.Songs.Remove(song);
            db.SaveChanges();
            return db.Songs.ToList();
        }

    }
}
