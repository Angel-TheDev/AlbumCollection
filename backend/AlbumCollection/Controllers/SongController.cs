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


        // GET api/Album
        [HttpGet]
        public ActionResult<IEnumerable<Song>> Get()
        {
            return db.Songs.ToList();
        }


        // POST api/Album
        [HttpPost]
        public ActionResult<IEnumerable<Song>> Post([FromBody] Song song)
        {
            db.Songs.Add(song);
            db.SaveChanges();
            return db.Songs.ToList();
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
