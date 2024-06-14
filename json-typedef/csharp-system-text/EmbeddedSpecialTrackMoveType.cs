// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Datasworn
{
    [JsonConverter(typeof(EmbeddedSpecialTrackMoveTypeJsonConverter))]
    public enum EmbeddedSpecialTrackMoveType
    {
        Move,
    }
    public class EmbeddedSpecialTrackMoveTypeJsonConverter : JsonConverter<EmbeddedSpecialTrackMoveType>
    {
        public override EmbeddedSpecialTrackMoveType Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            string value = JsonSerializer.Deserialize<string>(ref reader, options);
            switch (value)
            {
                case "move":
                    return EmbeddedSpecialTrackMoveType.Move;
                default:
                    throw new ArgumentException(String.Format("Bad EmbeddedSpecialTrackMoveType value: {0}", value));
            }
        }

        public override void Write(Utf8JsonWriter writer, EmbeddedSpecialTrackMoveType value, JsonSerializerOptions options)
        {
            switch (value)
            {
                case EmbeddedSpecialTrackMoveType.Move:
                    JsonSerializer.Serialize<string>(writer, "move", options);
                    return;
            }
        }
    }
}
