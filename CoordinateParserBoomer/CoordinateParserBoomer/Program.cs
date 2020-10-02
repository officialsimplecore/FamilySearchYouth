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
            var input = System.IO.File.ReadAllText(AppDomain.CurrentDomain.BaseDirectory + @"\input.txt");
            String[] coordinatesInput = input.Split("0.0 ");
            int length = coordinatesInput.Length;
            Coordinate[] coordinates = new Coordinate[length];


            int position = 0;
            foreach (string coordinate in coordinatesInput)
            {
                String[] tempCoordinate = coordinate.Split(",");
                coordinates[position] = new Coordinate
                {
                    Lat = double.Parse(tempCoordinate[1]),
                    Lng = double.Parse(tempCoordinate[0])
                };

                Console.WriteLine($"{coordinates[position].Lat} {coordinates[position].Lng}");

                position++;
            }

            // JSON Serialize
            var serializerSettings = new JsonSerializerSettings();
            serializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();

            string json = JsonConvert.SerializeObject(coordinates, serializerSettings);

            System.IO.File.WriteAllText(AppDomain.CurrentDomain.BaseDirectory + @"\coordinates.json", json);

            Console.ReadKey();
        }
    }
}
