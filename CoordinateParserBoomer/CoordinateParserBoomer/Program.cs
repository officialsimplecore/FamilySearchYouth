using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Text.Json.Serialization;

namespace CoordinateParserBoomer
{
    class Coordinate
    {
        public Coordinate()
        {

        }
        public double? Lat { get; set; }
        public double? Lng { get; set; }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Choose file name");
            var fileName = Console.ReadLine();

            // Takes input from text file (because of length)
            var input = System.IO.File.ReadAllText(AppDomain.CurrentDomain.BaseDirectory + @"input.txt");
            String[] fullstringCoordinates = input.Split(" ");
            int amountOfCoordinates = fullstringCoordinates.Length;
            
            // Initialize size of output
            Coordinate[] coordinates = new Coordinate[amountOfCoordinates];

            int pointer = 0;
            foreach (string coordinate in fullstringCoordinates)
            {
                string[] _coordinate = coordinate.Split(",");

                // Set temporary coordinates to output array
                coordinates[pointer] = new Coordinate
                {
                    Lat = double.Parse(_coordinate[1]),
                    Lng = double.Parse(_coordinate[0])
                };

                Console.WriteLine($"{coordinates[pointer].Lat} {coordinates[pointer].Lng}");

                pointer++;
            }

            // JSON Serialize

            // Use camel case
            var serializerSettings = new JsonSerializerSettings();
            serializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();

            string json = JsonConvert.SerializeObject(coordinates, serializerSettings);

            // Output JSON object as a file
            System.IO.File.WriteAllText(AppDomain.CurrentDomain.BaseDirectory + $@"{fileName}.json", json);

            Console.ReadKey();
        }
    }
}
