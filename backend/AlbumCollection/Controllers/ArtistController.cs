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
    public class ArtistController : ControllerBase
    {
        private SiteContext db;

        public ArtistController(SiteContext db)
        {
            this.db = db;
        }

        //Artist Actions

        // GET api/Artists
        [HttpGet]
        public ActionResult<IEnumerable<Artist>> Get()
        {
            return db.Artists;

        }


        // POST api/Artist
        [HttpPost]
        public ActionResult<IEnumerable<Artist>> Post([FromBody] Artist artist)
        {
            db.Artists.Add(artist);
            db.SaveChanges();
            return db.Artists.ToList();
        }

        // PUT api/values/5
        [HttpPut]
        public ActionResult<IEnumerable<Artist>> Put([FromBody] Artist artist)
        {
            db.Artists.Update(artist);
            db.SaveChanges();
            return db.Artists.ToList();
        }


        [HttpDelete]
        public ActionResult<IEnumerable<Artist>> Delete(Artist artist)
        {
            db.Artists.Remove(artist);
            db.SaveChanges();
            return db.Artists.ToList();
        }

    }
}
