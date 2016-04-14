using AngularTest.Interfaces;
using System;
using System.Text.RegularExpressions;

namespace AngularTest.Services
{
    public class PalinDromeService : IPalinDromeService
    {
        private Random _random;

        public PalinDromeService()
        {
            _random = new Random();
        }

        public string GenerateRandomString()
        {
            var randomString = "";
            var length = _random.Next(2, 10);

            for (int count = 0; count < length; count++)
            {
                var letterIndex = _random.Next(0, 25);
                randomString += (char)('a' + letterIndex);
            }

            return randomString;
        }

        public string TurnStringIntoPalinDrome (string palinFirstPart)
        {
            palinFirstPart = Regex.Replace(palinFirstPart, "([^a-zA-Z]{1,})", "");
            var palinLastPart = palinFirstPart.Substring(0, palinFirstPart.Length - (palinFirstPart.Length % 2)).ToCharArray();
            Array.Reverse(palinLastPart);

            return palinFirstPart + new string(palinLastPart);
        }
    }
}