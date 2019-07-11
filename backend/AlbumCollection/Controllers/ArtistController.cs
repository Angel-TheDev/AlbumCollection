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
            //private static List<string> artists = new List<string>()
            //{
            //    "Metallica",
            //    "Body Void",
            //    "Disturbed",
            //    "Sněť"
            //};

            // GET api/values
            [HttpGet]
            public ActionResult<IEnumerable<string>> Get()
            {
                return new string[] { "Metallica", "Body Void", "Disturbed", "Sněť" };
            }

            // GET api/values/5
            [HttpGet("{id}")]
            public ActionResult<string> Get(int id)
            {
                return "artist";
            }

            // POST api/values
            [HttpPost]
            public void Post([FromBody] string artist)
            {
            }

            // PUT api/values/5
            [HttpPut("{id}")]
            public void Put(int id, [FromBody] string artist)
            {
            }

            // DELETE api/values/5
            [HttpDelete("{id}")]
            public void Delete(int id)
            {
            }
    }
}
