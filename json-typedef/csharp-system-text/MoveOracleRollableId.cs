// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Datasworn
{
    /// <summary>
    /// A unique ID representing a MoveOracleRollable object.
    /// </summary>
    [JsonConverter(typeof(MoveOracleRollableIdJsonConverter))]
    public class MoveOracleRollableId
    {
        /// <summary>
        /// The underlying data being wrapped.
        /// </summary>
        public string Value { get; set; }
    }

    public class MoveOracleRollableIdJsonConverter : JsonConverter<MoveOracleRollableId>
    {
        public override MoveOracleRollableId Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            return new MoveOracleRollableId { Value = JsonSerializer.Deserialize<string>(ref reader, options) };
        }

        public override void Write(Utf8JsonWriter writer, MoveOracleRollableId value, JsonSerializerOptions options)
        {
            JsonSerializer.Serialize<string>(writer, value.Value, options);
        }
    }
}
