// Code generated by jtd-codegen for C# + System.Text.Json v0.2.1

using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Datasworn
{
    [JsonConverter(typeof(EmbeddedOracleTableText3TypeJsonConverter))]
    public enum EmbeddedOracleTableText3Type
    {
        OracleRollable,
    }
    public class EmbeddedOracleTableText3TypeJsonConverter : JsonConverter<EmbeddedOracleTableText3Type>
    {
        public override EmbeddedOracleTableText3Type Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            string value = JsonSerializer.Deserialize<string>(ref reader, options);
            switch (value)
            {
                case "oracle_rollable":
                    return EmbeddedOracleTableText3Type.OracleRollable;
                default:
                    throw new ArgumentException(String.Format("Bad EmbeddedOracleTableText3Type value: {0}", value));
            }
        }

        public override void Write(Utf8JsonWriter writer, EmbeddedOracleTableText3Type value, JsonSerializerOptions options)
        {
            switch (value)
            {
                case EmbeddedOracleTableText3Type.OracleRollable:
                    JsonSerializer.Serialize<string>(writer, "oracle_rollable", options);
                    return;
            }
        }
    }
}
