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
            

            // GET api/Artists
            [HttpGet]
            public ActionResult<IEnumerable<Artist>> Get()
            {
                return db.Artists.ToList();
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
            [HttpPut("{id}")]
            public void Put(int id, [FromBody] string artist)
            {
            }

            // DELETE api/values/5
            [HttpDelete("{id}")]
            public ActionResult<IEnumerable<Artist>> Delete(Artist artist)
            {
                db.Artists.Remove(artist);
                db.SaveChanges();
                return db.Artists.ToList();
            }
    }
}
