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
    public class AlbumController : ControllerBase
    {
        private SiteContext db;

        public AlbumController(SiteContext db)
        {
            this.db = db;
        }

        //Album Actions

        // GET api/Albums
        [HttpGet]
        public ActionResult<IEnumerable<Album>> Get()
        {
            return db.Albums;

        }

        [HttpGet("{id}")]
        public ActionResult<Album> GetById(int id)
        {
            return db.Albums.Single(a => a.AlbumId == id);
        }

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
