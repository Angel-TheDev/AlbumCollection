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

        //Album Actions


            // POST api/Album
            [HttpPost]
            public ActionResult<IEnumerable<Album>> Post([FromBody] Album album)
            {
                db.Albums.Add(album);
                db.SaveChanges();
                return db.Albums.ToList();
            }

            // PUT api/values/5
            [HttpPut]
            public ActionResult<IEnumerable<Album>> Put([FromBody] Album album)
            {
                db.Albums.Update(album);
                db.SaveChanges();
                return db.Albums.ToList();
            }


            [HttpDelete]
            public ActionResult<IEnumerable<Album>> Delete(Album album)
            {
                db.Albums.Remove(album);
                db.SaveChanges();
                return db.Albums.ToList();
            }


    }
}
