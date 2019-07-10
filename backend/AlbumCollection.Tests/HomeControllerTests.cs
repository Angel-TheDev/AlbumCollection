using System;
using System.Collections.Generic;
using System.Text;

namespace AlbumCollection.Tests
{
    class HomeControllerTests
    {
        [Fact]
        public void Index_Returns_Hello_World()
        {
            var underTest = new HomeController();

            var result = underTest.Index();

            Assert.Equal("Hello world!", result);
        }

    }
}
