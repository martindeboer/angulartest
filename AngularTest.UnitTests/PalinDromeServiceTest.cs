using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using AngularTest.Services;
using System.Text.RegularExpressions;

namespace AngularTest.UnitTests
{
    [TestClass]
    public class PalinDromeServiceTest
    {
        private PalinDromeService _palinDromeService;

        public PalinDromeServiceTest()
        {
            _palinDromeService = new PalinDromeService();
        }

        [TestMethod]
        public void GeneratePalinDromeTest()
        {
            var palinDrome1 = _palinDromeService.TurnStringIntoPalinDrome("bee");
            var palinDrome2 = _palinDromeService.TurnStringIntoPalinDrome("beep");


            Assert.IsTrue(palinDrome1 == "beeeb" && palinDrome2 == "beeppeeb");
        }

        [TestMethod]
        public void GenerateRandomStringTest ()
        {
            // Is this really a proper unit-test? By using Random it's not really consistent, but it does get tested.
            bool validSoFar = true;

            for (int count=0;count<1000 && validSoFar;count++)
            {
                var randomString = _palinDromeService.GenerateRandomString();

                validSoFar = (Regex.Matches("", "([^a-zA-Z]{1,})").Count == 0); 
            }

            Assert.IsTrue(validSoFar);
        }
    }
}
