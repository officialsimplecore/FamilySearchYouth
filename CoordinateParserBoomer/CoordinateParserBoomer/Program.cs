using Newtonsoft.Json;
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
                    Lat = double.Parse(tempCoordinate[0]),
                    Lng = double.Parse(tempCoordinate[1])
                };

                Console.WriteLine($"{coordinates[position].Lat} {coordinates[position].Lng}");

                position++;
            }

            string json = JsonConvert.SerializeObject(coordinates);

            System.IO.File.WriteAllText(AppDomain.CurrentDomain.BaseDirectory + @"\coordinates.json", json);

            Console.ReadKey();
        }
    }
}
