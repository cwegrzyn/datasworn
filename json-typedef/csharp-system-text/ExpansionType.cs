// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Datasworn
{
    [JsonConverter(typeof(ExpansionTypeJsonConverter))]
    public enum ExpansionType
    {
        Expansion,
    }
    public class ExpansionTypeJsonConverter : JsonConverter<ExpansionType>
    {
        public override ExpansionType Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            string value = JsonSerializer.Deserialize<string>(ref reader, options);
            switch (value)
            {
                case "expansion":
                    return ExpansionType.Expansion;
                default:
                    throw new ArgumentException(String.Format("Bad ExpansionType value: {0}", value));
            }
        }

        public override void Write(Utf8JsonWriter writer, ExpansionType value, JsonSerializerOptions options)
        {
            switch (value)
            {
                case ExpansionType.Expansion:
                    JsonSerializer.Serialize<string>(writer, "expansion", options);
                    return;
            }
        }
    }
}
